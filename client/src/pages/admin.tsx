import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { menuData, MenuItemData } from "@/lib/menu-data";
import { Plus, Edit2, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Admin() {
  const [items, setItems] = useState<MenuItemData[]>(menuData);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<MenuItemData | null>(null);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const newItem: MenuItemData = {
      id: editingItem?.id || Date.now(),
      name: formData.get('name') as string,
      category: formData.get('category') as MenuItemData['category'],
      price: parseFloat(formData.get('price') as string),
      description: formData.get('description') as string,
      image: formData.get('image') as string || 'https://via.placeholder.com/400x300?text=Food+Image',
    };

    if (editingItem) {
      setItems(prev => prev.map(item => item.id === editingItem.id ? newItem : item));
      toast({
        title: "Item Updated!",
        description: `${newItem.name} has been updated successfully.`,
      });
    } else {
      setItems(prev => [...prev, newItem]);
      toast({
        title: "Item Added!",
        description: `${newItem.name} has been added to the menu.`,
      });
    }

    setIsDialogOpen(false);
    setEditingItem(null);
    e.currentTarget.reset();
  };

  const handleEdit = (item: MenuItemData) => {
    setEditingItem(item);
    setIsDialogOpen(true);
  };

  const handleDelete = (id: number) => {
    setItems(prev => prev.filter(item => item.id !== id));
    toast({
      title: "Item Deleted!",
      description: "The menu item has been removed successfully.",
    });
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setEditingItem(null);
  };

  return (
    <div className="pt-24 pb-20 bg-[var(--background)]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-[var(--foodie-dark)] mb-2">
              Admin <span className="text-[var(--foodie-primary)]">Dashboard</span>
            </h1>
            <p className="text-xl text-gray-600">Manage your restaurant menu items</p>
          </div>
          
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-[var(--foodie-primary)] hover:bg-[var(--foodie-golden)] text-white">
                <Plus className="mr-2" size={16} />
                Add New Item
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="font-playfair text-2xl font-bold">
                  {editingItem ? 'Edit Menu Item' : 'Add New Menu Item'}
                </DialogTitle>
              </DialogHeader>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Item Name</Label>
                    <Input 
                      id="name"
                      name="name" 
                      required 
                      defaultValue={editingItem?.name}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Select name="category" defaultValue={editingItem?.category} required>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="starters">Starters</SelectItem>
                        <SelectItem value="mains">Main Course</SelectItem>
                        <SelectItem value="desserts">Desserts</SelectItem>
                        <SelectItem value="drinks">Drinks</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="price">Price ($)</Label>
                    <Input 
                      id="price"
                      name="price" 
                      type="number" 
                      step="0.01" 
                      required 
                      defaultValue={editingItem?.price}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="image">Image URL</Label>
                    <Input 
                      id="image"
                      name="image" 
                      type="url" 
                      defaultValue={editingItem?.image}
                      className="mt-2"
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea 
                    id="description"
                    name="description" 
                    rows={3} 
                    required 
                    defaultValue={editingItem?.description}
                    className="mt-2 resize-none"
                  />
                </div>
                
                <div className="flex gap-4">
                  <Button 
                    type="submit" 
                    className="flex-1 bg-[var(--foodie-primary)] hover:bg-[var(--foodie-golden)] text-white"
                  >
                    {editingItem ? 'Update Item' : 'Add Item'}
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={handleDialogClose}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <Card key={item.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <Badge className="absolute top-2 right-2 capitalize">
                  {item.category}
                </Badge>
              </div>
              
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-playfair text-lg font-bold text-[var(--foodie-dark)]">
                    {item.name}
                  </h3>
                  <span className="text-lg font-bold text-[var(--foodie-primary)]">
                    ${item.price}
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>
                
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEdit(item)}
                    className="flex-1"
                  >
                    <Edit2 size={14} className="mr-1" />
                    Edit
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDelete(item.id)}
                    className="flex-1 text-red-600 hover:text-red-700 hover:bg-red-50"
                  >
                    <Trash2 size={14} className="mr-1" />
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {items.length === 0 && (
          <div className="text-center py-12">
            <h3 className="font-playfair text-2xl font-bold text-gray-400 mb-2">No menu items yet</h3>
            <p className="text-gray-500">Add your first menu item to get started!</p>
          </div>
        )}
      </div>
    </div>
  );
}

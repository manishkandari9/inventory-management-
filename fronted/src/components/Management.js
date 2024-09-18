import React, { useState } from 'react';

const Sidebar = ({ activeTab, setActiveTab, darkMode, toggleDarkMode }) => {
  const tabs = [
    { name: 'Inventory' },
    { name: 'Balance' },
    { name: 'Products' },
    { name: 'Suppliers' },
    { name: 'Customers' },
    { name: 'Reports' },
    { name: 'Settings' },
  ];

  return (
    <div className={`w-64 ${darkMode ? 'bg-gray-900' : 'bg-gray-800'} text-white h-screen fixed left-0 top-0 overflow-y-auto`}>
      <div className="p-4">
        <h1 className="text-2xl font-bold">Inventory System</h1>
      </div>
      <nav>
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={`flex items-center w-full p-4 ${
              activeTab === tab.name ? (darkMode ? 'bg-gray-800' : 'bg-gray-700') : (darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-700')
            }`}
            onClick={() => setActiveTab(tab.name)}
          >
            {tab.name}
          </button>
        ))}
      </nav>
      <div className="absolute bottom-0 left-0 w-full p-4">
        <button
          className={`flex items-center w-full p-4 ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-700'}`}
          onClick={toggleDarkMode}
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        <button
          className={`flex items-center w-full p-4 ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-700'}`}
          onClick={() => alert('Logout functionality to be implemented')}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

const InventoryForm = ({ addItem, darkMode }) => {
  const [item, setItem] = useState({
    date: '',
    fromWhere: '',
    indexBookNo: '',
    itemNo: '',
    itemName: '',
    causeOfConsumable: '',
    consumableDate: '',
    balance: '',
    remark: '',
  });

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(item);
    setItem({
      date: '',
      fromWhere: '',
      indexBookNo: '',
      itemNo: '',
      itemName: '',
      causeOfConsumable: '',
      consumableDate: '',
      balance: '',
      remark: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <input
          type="date"
          name="date"
          value={item.date}
          onChange={handleChange}
          placeholder="Date"
          className={`p-2 border rounded ${darkMode ? 'bg-gray-700 text-white' : 'bg-white'}`}
          required
        />
        <input
          type="text"
          name="fromWhere"
          value={item.fromWhere}
          onChange={handleChange}
          placeholder="From Where"
          className={`p-2 border rounded ${darkMode ? 'bg-gray-700 text-white' : 'bg-white'}`}
          required
        />
        <input
          type="text"
          name="indexBookNo"
          value={item.indexBookNo}
          onChange={handleChange}
          placeholder="Index Book No"
          className={`p-2 border rounded ${darkMode ? 'bg-gray-700 text-white' : 'bg-white'}`}
          required
        />
        <input
          type="text"
          name="itemNo"
          value={item.itemNo}
          onChange={handleChange}
          placeholder="Item No"
          className={`p-2 border rounded ${darkMode ? 'bg-gray-700 text-white' : 'bg-white'}`}
          required
        />
        <input
          type="text"
          name="itemName"
          value={item.itemName}
          onChange={handleChange}
          placeholder="Item Name"
          className={`p-2 border rounded ${darkMode ? 'bg-gray-700 text-white' : 'bg-white'}`}
          required
        />
        <input
          type="text"
          name="causeOfConsumable"
          value={item.causeOfConsumable}
          onChange={handleChange}
          placeholder="Cause of Consumable"
          className={`p-2 border rounded ${darkMode ? 'bg-gray-700 text-white' : 'bg-white'}`}
          required
        />
        <input
          type="date"
          name="consumableDate"
          value={item.consumableDate}
          onChange={handleChange}
          placeholder="Consumable Date"
          className={`p-2 border rounded ${darkMode ? 'bg-gray-700 text-white' : 'bg-white'}`}
          required
        />
        <input
          type="number"
          name="balance"
          value={item.balance}
          onChange={handleChange}
          placeholder="Balance"
          className={`p-2 border rounded ${darkMode ? 'bg-gray-700 text-white' : 'bg-white'}`}
          required
        />
        <input
          type="text"
          name="remark"
          value={item.remark}
          onChange={handleChange}
          placeholder="Remark"
          className={`p-2 border rounded ${darkMode ? 'bg-gray-700 text-white' : 'bg-white'}`}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Add Item
      </button>
    </form>
  );
};

const BalanceView = ({ darkMode }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white'} p-4 rounded shadow`}>
        <h3 className="font-bold text-lg mb-2">Total Inventory Value</h3>
        <p className="text-2xl">$100,000</p>
      </div>
      <div className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white'} p-4 rounded shadow`}>
        <h3 className="font-bold text-lg mb-2">Total Items</h3>
        <p className="text-2xl">500</p>
      </div>
      <div className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white'} p-4 rounded shadow`}>
        <h3 className="font-bold text-lg mb-2">Low Stock Items</h3>
        <p className="text-2xl">15</p>
      </div>
    </div>
  );
};

const Management = () => {
  const [activeTab, setActiveTab] = useState('Inventory');
  const [inventoryItems, setInventoryItems] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const addItem = (item) => {
    setInventoryItems([...inventoryItems, item]);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`flex ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100'} min-h-screen`}>
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="flex-1 ml-64 p-8">
        <h2 className="text-2xl font-bold mb-4">{activeTab}</h2>
        {activeTab === 'Inventory' && (
          <>
            <InventoryForm addItem={addItem} darkMode={darkMode} />
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-2">Inventory List</h3>
              <div className={`${darkMode ? 'bg-gray-700' : 'bg-white'} overflow-x-auto rounded shadow`}>
                <table className="w-full border-collapse">
                  <thead>
                    <tr className={darkMode ? 'bg-gray-800' : 'bg-gray-200'}>
                      <th className="border p-2">Date</th>
                      <th className="border p-2">From</th>
                      <th className="border p-2">Index Book No</th>
                      <th className="border p-2">Item No</th>
                      <th className="border p-2">Item Name</th>
                      <th className="border p-2">Cause of Consumable</th>
                      <th className="border p-2">Consumable Date</th>
                      <th className="border p-2">Balance</th>
                      <th className="border p-2">Remark</th>
                    </tr>
                  </thead>
                  <tbody>
                    {inventoryItems.map((item, index) => (
                      <tr key={index} className={darkMode ? 'bg-gray-600' : 'bg-white'}>
                        <td className="border p-2">{item.date}</td>
                        <td className="border p-2">{item.fromWhere}</td>
                        <td className="border p-2">{item.indexBookNo}</td>
                        <td className="border p-2">{item.itemNo}</td>
                        <td className="border p-2">{item.itemName}</td>
                        <td className="border p-2">{item.causeOfConsumable}</td>
                        <td className="border p-2">{item.consumableDate}</td>
                        <td className="border p-2">{item.balance}</td>
                        <td className="border p-2">{item.remark}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
        {activeTab === 'Balance' && <BalanceView darkMode={darkMode} />}
        {activeTab === 'Products' && <p>Products management coming soon...</p>}
        {activeTab === 'Suppliers' && <p>Suppliers management coming soon...</p>}
        {activeTab === 'Customers' && <p>Customers management coming soon...</p>}
        {activeTab === 'Reports' && <p>Reports feature coming soon...</p>}
        {activeTab === 'Settings' && <p>Settings feature coming soon...</p>}
      </div>
    </div>
  );
};

export default Management;

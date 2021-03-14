import logo from './logo.svg';
import './App.css';
import FolderStructure from './components/FolderStructure';

function App() {
  const data =  [
    {
        title: 'src',
        children: [
            {
                title: 'components',
                children: []
            },
            {
                title: 'redux',
                children: [
                     {title: "actions", children: []},
                     {title: "reducers", children: []},
                ]
            }
        ]
    },
    {
        title: 'assets',
        children: [
            { title: 'images',children: [] },
            { title: "fonts", children: [] }
        ]
    },
]

  return (
    <div className="App">
      <FolderStructure data={data} />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import FolderStructure from './components/FolderStructure';
import FolderStr from './components/FolderStr'

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
    <div >
    {/*   <FolderStructure data={data} /> */}
      <FolderStr data={data} />
    </div>
  );
}

export default App;

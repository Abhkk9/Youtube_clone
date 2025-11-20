import Button from './Button'

const list =["All","Sports","News","Live","Songs","Cricket","Football","Cooking"];

function ButtonList() {
  return (
    <div className='flex'>
      {list.map((item) => (
        <Button name={item} key={item} />
      ))}
      
    </div>
  )
}

export default ButtonList

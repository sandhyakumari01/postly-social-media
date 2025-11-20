
import ProfileIcon from './ProfileIcon';
// import users from 'forms/users.ts'

const users=[
    {
        id:1,
        name:"Sandhya Kushwaha",
        username:'Sandhya_@09'
    },
    {
        id:2,
        name:"Ashish",
        username:'Ashish_@09'
    },
    {
        id:3,
        name:"Shivam Sharma",
        username:'Shivam_singh'
    },
    {
        id:4,
        name:"SandySingh",
        username:'Sandy'
    },
]

function Story() {
    let accountName = users[Math.floor(Math.random() * users.length)].username;
  
    if (accountName.length > 10) {
      accountName = accountName.substring(0, 10) + "...";
    }

  return (
    <div className='story'>
       <ProfileIcon iconSize="big" storyBorder={true} image={undefined} />
      <span className="accountName">{accountName}</span>
    </div>
  );
}

export default Story;

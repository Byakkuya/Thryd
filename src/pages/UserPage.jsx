import UserHeader from '../components/UserHeader'
import UserPost from '../components/UserPost'

function UserPage() {
  return <>
    <UserHeader />
    <UserPost likes={69} replies={69} postImg="/post1.png" postTitle="suiiiiiiiiiii" />
    <UserPost likes={120} replies={9} postImg="/post2.png" postTitle="suiiiiiiiiiii" />
    <UserPost likes={3000} replies={200} postImg="/post3.png" postTitle="suiiiiiiiiiii" />
    <UserPost likes={100} replies={50}  postTitle="suiiiiiiiiiii first post " />
    </>
  
};

export default UserPage
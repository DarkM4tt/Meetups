import MeetupList from "./../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeBBg1sczduRclnYTc-kgAPkA0FGZ6rNoyoA&usqp=CAU",
    address: "Volantio, Bentley",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeBBg1sczduRclnYTc-kgAPkA0FGZ6rNoyoA&usqp=CAU",
    address: "Venenzuella, Baluchistan",
    description: "This is a second meetup!",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;

import "./WelcomeStyle.css";
import profileImage from "../assets/profileImg.png";
const Welcome = () => {
  const committeeMem = [
    {
      image: profileImage,
      name: "Dr. One",
      position: "Position One",
    },
    {
      image: profileImage,
      name: "Dr. Two",
      position: "Position Two",
    },
    {
      image: profileImage,
      name: "Dr. Three",
      position: "Position Three",
    },
  ];
  return (
    <div className="welcome-container">
      <div className="welcome-inner">
        <h1>Welcome Message</h1>
        <div className="welcome-message-container">
          <p>Dear Friends and Colleagues,</p>
          <p>
            Eluru Obstetrics and Gynecological Society, Eluru is prestigious to
            host & invite you to the 9th APCOG 2024 conference at Eluru, Andhra
            Pradesh on 13th – 14th July 2024. The theme of the 9th APCOG 2024 is
            “Women’s Health Nation’s Wealth”. The conference mainly focuses on
            Women’s Health. This state conference will give you the
            opportunities to share & exchange knowledge, research, ideas &
            opinions, gain inspiration for future research, and broaden your
            knowledge about various fields of Obstetrics and Gynecology.
            Delegates across the nation are expected to actively participate in
            this event. This conference provides a big platform for the
            participants to share the experiences & knowledge through excellent
            topics taken by eminent speakers across the country. Eluru – Hidden
            Gem and rice bowl of Andhra Pradesh. With picturesque views of vast
            stretches of paddy fields and coconut groves, Eluru is certain to
            enchant you at the very first sight. Moving along its streets, the
            city greets you with verdant riverbanks, archaeological remains of a
            bygone era, and age-old temples. Once the stronghold and capital of
            the Vishnukundina rulers, Eluru was formerly known as Helapuri a
            place of celebration. Eluru is fast emerging as a prominent trade
            hub, owing to its carpet and incense stick industries. It has
            produced many eminent personalities of the Telugu Film Industry with
            its multifaceted appeal, Eluru never fails to charm travelers. Known
            for its religious significance, Eluru has many popular shrines. The
            Dwarka Tirumala temple dedicated to Lord Venkateshwara is one such
            temple and is flocked by devotees throughout the year. The Holy Land
            Replica is a sacred site for the Catholic faith as it represents the
            holy land in Israel. The Guntupalli Caves are among the prime
            attractions of Eluru, renowned for their historical and religious
            significance. The Kolleru Lake, a shallow freshwater lakes situated
            15 km from the city is a must-visit for all nature lovers. With calm
            and scenic surroundings, it transforms into a sanctuary for
            migratory birds during winter. Birdwatchers can spot species from
            Asia, and Eastern Europe, which gather here in large numbers. The
            Buddha Park is another worthwhile place to visit in Eluru. It is
            among the landmark areas of the city owing to the enormous 74ft
            highstatue of Lord Buddha in the iconic Abhaya posture in the heart
            of the Gaja Vallivaru Cheruvu, an ancient pond.
          </p>
          <p>
            We look forward to welcoming you to the city of Andhra Pradesh
            Eluru, for the 9th AP State Conference of EOGS. We would also
            request you to kindly spread the word & encourage others to join us.
            With Warm Wishes - Team 9th APCOG 2024
          </p>
        </div>
        <div className="committee-container">
            <h2>Organising Committee</h2>
            <div className="profile-container">
              {committeeMem.map((item) => {
                return (
                  <div key={item.name}>
                    <img className="profile-image" src={item.image} />
                    <h3>{item.name}</h3>
                    <h6>{item.position}</h6>
                  </div>
                );
              })}
            </div>
          </div>
      </div>
    </div>
  );
};
export default Welcome;

import { Image, ScrollView, Text, View } from "react-native";

const Story = (props: any) => {
  return (
    <View style={{ alignItems: "center", marginRight: 20 }}>
      <Image
        source={{
          uri: props.image,
        }}
        style={{ width: 70, height: 70, borderRadius: 70 }}
      />
      <Text style={{ maxWidth: 50, textAlign: "center" }}>{props.title}</Text>
    </View>
  );
};

export default function PropsComponent() {
  return (
    <View style={{ marginTop: 50 }}>
      <Text style={{ marginBottom: 50 }}>Belajar Props Dinamis</Text>
      <ScrollView horizontal>
        <View style={{ flexDirection: "row" }}>
          <Story
            title="Kuliah"
            image="https://instagram.fbdo2-1.fna.fbcdn.net/v/t51.71878-15/565748255_1894682781111760_7169070534613645598_n.jpg?stp=c0.247.640.640a_dst-jpg_e15_s150x150_tt6&_nc_cat=109&_nc_map=urlgen_bucketless&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IlNUT1JZLnhwaWRzLjY0MC5zZHIudmlkZW9fZGVmYXVsdF9jb3Zlcl9mcmFtZS5DMyJ9&_nc_ohc=SRvFK-i22XoQ7kNvwF12TpE&_nc_oc=Ado3G7nBH-T1eK6jPYe8K5DRDNbVjCFAjekVGahDJAvDJtMPzlCeDfO_av3Y7pPwXAA&_nc_zt=23&_nc_ht=instagram.fbdo2-1.fna&_nc_gid=9q3qogIdnDw-iUWFC0B9EA&_nc_ss=7baaf&oh=00_AQNamSXrJ72O7fx8KoTY1NuIOvE8nqiaUlrnQI5wYSBvPA&oe=6ADE507A"
          />
          <Story
            title="Game Translation"
            image="https://instagram.fbdo2-1.fna.fbcdn.net/v/t51.82787-15/563701789_18100811857729645_4197955562101673482_n.webp?stp=c0.280.720.720a_dst-jpg_e35_s150x150_tt6&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6Ij8ueHBpZHMuNzIwLnNkci5yZWd1bGFyX3Bob3RvLkMzIn0%3D&_nc_ohc=2hePzxixvdEQ7kNvwEm0Mjr&_nc_oc=Adrld3a7F8ygPxxJQTqRggLZ7FgFjZQEROk57V16vfiISoJ9b0V4Rg_kxjhDW_Ip7Go&_nc_zt=23&_nc_ht=instagram.fbdo2-1.fna&_nc_gid=9q3qogIdnDw-iUWFC0B9EA&_nc_ss=7baaf&oh=00_AQMRcMgwINDuYw70H5Xzyw080oBAyOAI1dGYSq6wkdiadQ&oe=6ADE50F6"
          />
          <Story
            title="Cover Musik"
            image="https://instagram.fbdo2-1.fna.fbcdn.net/v/t51.71878-15/568677227_2332631127211600_7793854071553303831_n.jpg?stp=c0.247.640.640a_dst-jpg_e15_s150x150_tt6&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IlNUT1JZLnhwaWRzLjY0MC5zZHIudmlkZW9fZGVmYXVsdF9jb3Zlcl9mcmFtZS5DMyJ9&_nc_ohc=HP3ZR6_HxNcQ7kNvwGU9IFG&_nc_oc=AdqknMBHnnjAqdsh2pHBxwpUpCGQa9v0YWCdLcDa86rXuu80Vw-PuczCq_CvCsrve-8&_nc_zt=23&_nc_ht=instagram.fbdo2-1.fna&_nc_gid=9q3qogIdnDw-iUWFC0B9EA&_nc_ss=7baaf&oh=00_AQNwJFekKsb9iDmnfmjWvYqzBE5CiKbM36yPf8_DqJeqQA&oe=6ADE46EB"
          />
          <Story
            title="Magang"
            image="https://instagram.fbdo2-1.fna.fbcdn.net/v/t51.71878-15/573609949_1446616219744817_8386038671725998066_n.jpg?stp=c0.247.640.640a_dst-jpg_e15_s150x150_tt6&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IlNUT1JZLnhwaWRzLjY0MC5zZHIudmlkZW9fZGVmYXVsdF9jb3Zlcl9mcmFtZS5DMyJ9&_nc_ohc=UPNjgXpxHcoQ7kNvwHoKEuy&_nc_oc=Adq9Ve0kyO50NakdiWW5zKbhQCW5ugcBuhyo6bw5ZtxljX-6ZFb2F33KcNRDjrc3giQ&_nc_zt=23&_nc_ht=instagram.fbdo2-1.fna&_nc_gid=9q3qogIdnDw-iUWFC0B9EA&_nc_ss=7baaf&oh=00_AQOqmJolBYsm5l0gc4h7Ifu2Z-iVpSgnavsYsCjkn5Iqxw&oe=6ADE3C7B"
          />
        </View>
      </ScrollView>
    </View>
  );
}

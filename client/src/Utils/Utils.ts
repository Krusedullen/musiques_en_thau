export const figmaSkisse =
  "https://www.figma.com/file/GWSCCoPncT0HAB1rPylL0v/CMS-Musiques-en-Thau?type=design&node-id=0-1&t=OmjNLWcy1F19TzZj-0";

export const musiquesFacebook =
  "https://www.facebook.com/groups/3297190587162445";

export const northSouthFacebook = "https://www.facebook.com/profile.php?id=61553590554807"

export const translateFrench =
  "https://musiquesenthau-com.translate.goog/?_x_tr_sl=en&_x_tr_tl=fr&_x_tr_hl=en-US&_x_tr_pto=wapp";

  function imageLinks(linkString: string) {
    return {
      webp: { linkString } + ".webp",
      jpg: { linkString } + ".jpg",
      png: { linkString } + ".png",
    };
  }

  //-----AVATAR LINKS-----
  export const avatars = {
    anaCruiseAvatar: imageLinks("/images/ArtistImages/ana_cruise_avatar"),
    cedricAvatar: imageLinks("/images/ArtistImages/c_chauveau_avatar"),
    melanderAvatar: imageLinks(
      "/images/ArtistImages/elisabeth_melander_avatar"
    ),
    hotClubAvatar: imageLinks("/images/ArtistImages/c_chauveau_avatar"),
  };

  export const postImages = {
    hotClubPoster: imageLinks("/images/hot_club_de_norvège_poster"),
  };

  export const languages = {
    english: {
      navlink1: "français",
    },

    french: {
      navlink1: "english",
    },
  };
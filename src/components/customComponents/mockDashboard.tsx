const MockDashboard = () => {
    const mock1: {
        userLogoUrl: number,
        userName: string,
        hasVideo: boolean,
        hasTwoPhotos : boolean,
        firstPhotoUrl : number,
        secondPhotoUrl : number,
        videoUrl : number,
        hasLikedByMe : boolean,
        hasSavedByMe : boolean,
        numberOfLikes : number,
        time : string,
        description: string,
        index: number
      } = {
        userLogoUrl : 1,
        userName : 'profile1',
        hasVideo : false,
        hasTwoPhotos : false,
        firstPhotoUrl : 1,
        secondPhotoUrl : -1,
        videoUrl : -1,
        hasLikedByMe : true,
        hasSavedByMe : false,
        numberOfLikes : 272,
        time : '1 saat önce',
        description: 'Lovely...',
        index: 1,
      };
      const mock2: {
        userLogoUrl: number,
        userName: string,
        hasVideo: boolean,
        hasTwoPhotos : boolean,
        firstPhotoUrl : number,
        secondPhotoUrl : number,
        videoUrl : number,
        hasLikedByMe : boolean,
        hasSavedByMe : boolean,
        numberOfLikes : number,
        time : string,
        description: string,
        index: number,
      } = {
        userLogoUrl: 2,
        userName: 'profile2',
        hasVideo: false,
        hasTwoPhotos: true,
        firstPhotoUrl: 2,
        secondPhotoUrl: 3,
        videoUrl: -1,
        hasLikedByMe: true,
        hasSavedByMe: true,
        numberOfLikes: 372,
        time: '2 saat önce',
        description: 'Perfect',
        index: 2,
      };
      const mock3: {
        userLogoUrl: number,
        userName: string,
        hasVideo: boolean,
        hasTwoPhotos : boolean,
        firstPhotoUrl : number,
        secondPhotoUrl : number,
        videoUrl : number,
        hasLikedByMe : boolean,
        hasSavedByMe : boolean,
        numberOfLikes : number,
        time : string,
        description: string,
        index: number,
      } = {
        userLogoUrl : 3,
        userName : 'profile3',
        hasVideo : true,
        hasTwoPhotos : false,
        firstPhotoUrl : 5,
        secondPhotoUrl : 5,
        videoUrl : 1,
        hasLikedByMe : true,
        hasSavedByMe : false,
        numberOfLikes : 372,
        time : '3 saat önce',
        description: 'Amazing...',
        index: 3,
      };
    
      function getMockDashboard() {
        const array = [mock1, mock2, mock3];  
        return array;
      }
  };

export default MockDashboard;
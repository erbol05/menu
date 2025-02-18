namespace TODO {
  type GetTodoRes = {
    category: string;
    description: string;
    id: number;
    _id: number;
    image: string;
    price: number;
    quentity: number;
    rating: {
      rate: number;
      count: number;
    };
    title: string;
  }[];
  type GetTodoReq = void;
}

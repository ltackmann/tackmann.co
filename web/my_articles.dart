import 'package:polymer/polymer.dart';

@CustomTag('my-articles')
class MyArticles extends PolymerElement {
  //Article selected = new Article()..id = 1;
   
  List<Article> articles = toObservable([ new Article()..id = 0,
                                          new Article()..id = 1,
                                          new Article()..id = 2]);  

  MyArticles.created() : super.created() {
    print("articles element");
  }
}

class Article {
   int id = -1;  
   
   String toString() => id.toString();
}
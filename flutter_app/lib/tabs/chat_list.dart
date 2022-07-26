import 'package:flutter/material.dart';
import 'package:english_words/english_words.dart';

class ChatList extends StatefulWidget {
  const ChatList({Key? key}) : super(key: key);

  @override
  State<ChatList> createState() => _ChatListState();
}

class _ChatListState extends State<ChatList> {
  @override
  Widget build(BuildContext context) {
    // final wordPair = WordPair.random();
    final suggestions = <WordPair>[];
    const biggerFont = TextStyle(fontSize: 18);

    return ListView.builder(
      itemBuilder: (context, i) {
        if (i.isOdd) return const Divider();

        final index = i ~/ 2;
        if (index >= suggestions.length) {
          suggestions.addAll(generateWordPairs().take(10));
        }
        return ListTile(
          title: Text(
            '${suggestions[index].first} ${suggestions[index].second}',
            style: biggerFont,
          ),
        );
      },
    );
  }
}

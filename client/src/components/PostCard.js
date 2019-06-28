import React from 'react';
import { Card, Icon, Label, Image, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import moment from 'moment';

function PostCard({
  post: { id, username, createdAt, body, likes, likeCount, commentCount }
}) {
  return (
    <Card fluid>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src="https://react.semantic-ui.com/images/avatar/large/molly.png"
        />
        <Card.Header>{username}</Card.Header>
        <Card.Meta as={Link} to={`/posts/${id}`}>
          {moment(createdAt).fromNow(true)}
        </Card.Meta>
        <Card.Description>{body}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button as="div" labelPosition="right">
          <Button color="blue" basic>
            <Icon name="heart" />
          </Button>
          <Label basic color="blue" pointing="left">
            {likeCount}
          </Label>
        </Button>
      </Card.Content>
    </Card>
  );
}

export default PostCard;

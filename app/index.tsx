import * as React from 'react';
import {
  addOpacityToRgb,
  Card,
  CardBadge,
  CardContent,
  CardDescription,
  CardFooter,
  CardImage,
  CardSubtitle,
  CardTitle,
} from '~/components/nativewindui/Card';
import { Text } from '~/components/nativewindui/Text';

export default function Screen() {
  return (
    <Card>
      <CardContent>
        <CardTitle className="ios:font-['Inter']">Title</CardTitle>
        <CardSubtitle>Subtitle</CardSubtitle>
      </CardContent>
      <CardFooter>
        <CardDescription>Description</CardDescription>
      </CardFooter>
    </Card>
  );
}

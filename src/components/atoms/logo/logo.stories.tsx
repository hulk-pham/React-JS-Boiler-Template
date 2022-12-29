import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Logo } from "./logo";

export default {
  title: "Atoms/Logo",
  component: Logo,
  argTypes: {},
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args: any) => <Logo {...args} />;

export const Preview = Template.bind({});
Preview.args = {};

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlaybackSpeedXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M23.25 18c0 5.719-4.266 10.453-9.75 11.156v-1.5c4.64-.703 8.25-4.781 8.25-9.656s-3.61-8.906-8.25-9.61v-1.5c5.484.704 9.75 5.438 9.75 11.11M6.234 10.125 5.156 9.094A10.67 10.67 0 0 1 10.5 6.89v1.5a9.6 9.6 0 0 0-4.266 1.734m-2.109 2.156A9.16 9.16 0 0 0 2.344 16.5h-1.5a10.7 10.7 0 0 1 2.203-5.297zm0 11.485-1.078 1.078A10.67 10.67 0 0 1 .844 19.5h1.5c.234 1.594.844 3.047 1.781 4.266m6.375 3.89v1.5a10.67 10.67 0 0 1-5.344-2.203l1.078-1.078c1.22.938 2.672 1.547 4.266 1.781M9.375 12.094c.234-.14.563-.094.797.047l7.5 5.25c.187.14.328.375.328.609a.82.82 0 0 1-.328.656l-7.5 5.25c-.235.14-.563.14-.797.047-.234-.14-.375-.422-.375-.703v-10.5c0-.281.14-.516.375-.656m1.125 2.11v7.64L15.938 18z' />
    </g>
    <defs>
      <clipPath id='2e3df598d3ab9175d43d94f9c3a17e9f__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlaybackSpeedXlRegularIcon);
export default ForwardRef;

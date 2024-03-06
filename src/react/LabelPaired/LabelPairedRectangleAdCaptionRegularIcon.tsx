import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRectangleAdCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={18}
    viewBox='0 0 14 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.75 5a.73.73 0 0 0-.54.21.73.73 0 0 0-.21.54v7.5q0 .328.21.54.212.21.54.21h10.5a.73.73 0 0 0 .54-.21.73.73 0 0 0 .21-.54v-7.5a.73.73 0 0 0-.21-.54.73.73 0 0 0-.54-.21zm-1.5.75q.024-.632.445-1.055.422-.421 1.055-.445h10.5q.633.024 1.055.445.421.423.445 1.055v7.5a1.52 1.52 0 0 1-.445 1.055q-.422.421-1.055.445H1.75a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 .25 13.25zm5.04 1.71 1.687 3.75q.094.33-.188.517-.328.094-.516-.188L6.04 11H3.836l-.234.54q-.187.281-.516.187-.305-.187-.188-.516l1.688-3.75a.38.38 0 0 1 .351-.211q.235 0 .352.21m-.353 1.08-.773 1.71h1.547zm4.126.585a.97.97 0 0 0-.82.469 1 1 0 0 0 0 .937q.28.445.82.469a.97.97 0 0 0 .82-.469 1 1 0 0 0 0-.937.97.97 0 0 0-.82-.469M10 8.656V7.625q.023-.352.375-.375.352.023.375.375v3.75q-.023.352-.375.375a.4.4 0 0 1-.375-.281 1.6 1.6 0 0 1-.937.281q-.727-.024-1.196-.492-.468-.47-.492-1.195.024-.727.492-1.196.469-.468 1.196-.492.538 0 .937.281' />
    </g>
    <defs>
      <clipPath id='953d0bad7c8bf0934e536729840a8d2c__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRectangleAdCaptionRegularIcon);
export default ForwardRef;

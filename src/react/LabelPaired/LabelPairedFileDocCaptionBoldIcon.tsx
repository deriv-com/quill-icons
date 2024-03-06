import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileDocCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.5 14.375h.75V15.5H1.5a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 0 14V5q.024-.632.445-1.055Q.868 3.524 1.5 3.5h3.89q.61 0 1.055.445l2.11 2.11Q9 6.5 9 7.133v3.117H7.875v-3H6a.73.73 0 0 1-.54-.21.73.73 0 0 1-.21-.54V4.625H1.5q-.352.023-.375.375v9q.023.352.375.375m2.625-2.625h.75q.469.024.797.328.304.329.328.797v1.5a1.22 1.22 0 0 1-.328.797 1.22 1.22 0 0 1-.797.328h-.75q-.352-.023-.375-.375v-3q.023-.352.375-.375m.375 3h.375q.352-.023.375-.375v-1.5q-.023-.352-.375-.375H4.5zm6.188-3h.374q.399 0 .657.281.28.258.281.656v.188q-.023.352-.375.375-.352-.023-.375-.375v-.187q-.024-.165-.187-.188h-.376q-.163.023-.187.188v1.874q.024.165.188.188h.374q.165-.024.188-.187v-.188q.023-.352.375-.375.352.023.375.375v.188a.85.85 0 0 1-.281.656.85.85 0 0 1-.656.281h-.376a.85.85 0 0 1-.656-.281.85.85 0 0 1-.281-.656v-1.876q0-.398.281-.656a.85.85 0 0 1 .656-.281m-3.938.938q0-.399.281-.657a.85.85 0 0 1 .657-.281h.375q.398 0 .656.281.28.258.281.656v1.876a.85.85 0 0 1-.281.656.85.85 0 0 1-.656.281h-.376a.85.85 0 0 1-.656-.281.85.85 0 0 1-.281-.656zm.938-.188q-.165.023-.188.188v1.874q.024.165.188.188h.375q.163-.024.187-.187v-1.876q-.024-.163-.187-.187z' />
    </g>
    <defs>
      <clipPath id='e9e8ce71423d035bee9ebd0f69bf1f75__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileDocCaptionBoldIcon);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationCrosshairsLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10 5.5q.859.078.938.938v1.64q2.578.352 4.374 2.11 1.759 1.796 2.149 4.374h1.602q.858.079.937.938-.078.859-.937.938H17.46q-.39 2.578-2.148 4.375-1.797 1.757-4.376 2.148v1.602q-.078.858-.937.937-.86-.079-.937-.937V22.96q-2.58-.39-4.376-2.148-1.757-1.797-2.109-4.375H.938Q.078 16.359 0 15.5q.078-.86.938-.937h1.64q.352-2.58 2.11-4.376 1.796-1.756 4.375-2.109v-1.64q.078-.86.937-.938m-5.625 10q0 1.523.742 2.813a5.64 5.64 0 0 0 2.07 2.07 5.7 5.7 0 0 0 2.813.742 5.7 5.7 0 0 0 2.813-.742 5.64 5.64 0 0 0 2.07-2.07q.742-1.29.742-2.813a5.54 5.54 0 0 0-.742-2.812 5.64 5.64 0 0 0-2.07-2.07A5.7 5.7 0 0 0 10 9.874a5.7 5.7 0 0 0-2.812.742 5.64 5.64 0 0 0-2.07 2.07 5.54 5.54 0 0 0-.743 2.813m7.5 0q-.039-1.055-.937-1.64-.938-.47-1.876 0-.898.585-.937 1.64.04 1.055.938 1.64.937.47 1.874 0 .9-.585.938-1.64m-5.625 0q0-1.015.508-1.875A3.759 3.759 0 0 1 10 11.75a3.76 3.76 0 0 1 3.242 1.875 3.6 3.6 0 0 1 .508 1.875 3.6 3.6 0 0 1-.508 1.875A3.759 3.759 0 0 1 10 19.25a3.76 3.76 0 0 1-3.242-1.875A3.6 3.6 0 0 1 6.25 15.5' />
    </g>
    <defs>
      <clipPath id='98bdd425614d7e28__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationCrosshairsLgBoldIcon);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGoogleLgIcon = (
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
      <path d='M19.531 15.734q-.078 4.22-2.578 6.797-2.539 2.578-6.797 2.657-2.695-.04-4.883-1.329a9.7 9.7 0 0 1-3.476-3.476Q.507 18.195.469 15.5q.04-2.695 1.328-4.883a9.7 9.7 0 0 1 3.476-3.476q2.188-1.29 4.883-1.328 3.945.078 6.485 2.539l-2.618 2.539Q12.188 9.25 9.922 9.406q-2.266.117-3.985 1.719-1.68 1.64-1.796 4.375.078 2.617 1.757 4.336 1.72 1.719 4.258 1.797 1.914-.04 3.086-.781 1.172-.742 1.758-1.68.547-.977.664-1.719h-5.508v-3.36h9.219q.156.704.156 1.641' />
    </g>
    <defs>
      <clipPath id='e07effed94855508d0bdc6b9df89c0c9__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGoogleLgIcon);
export default ForwardRef;

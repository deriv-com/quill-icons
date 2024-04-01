import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronUpLgBoldIcon = (
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
      <path d='M9.336 9.836a.92.92 0 0 1 1.289 0l7.54 7.5c.35.39.35.977 0 1.328-.392.39-.977.39-1.33 0L10 11.828l-6.836 6.836c-.39.39-.977.39-1.328 0a.856.856 0 0 1 0-1.289z' />
    </g>
    <defs>
      <clipPath id='3e1c7821529c87d20ea31608e67094f7__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronUpLgBoldIcon);
export default ForwardRef;

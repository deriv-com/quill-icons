import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedOneXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={36}
    viewBox='0 0 12 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.5 9v16.5h3c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5h-9A1.48 1.48 0 0 1 0 27c0-.797.656-1.5 1.5-1.5h3V11.813l-2.203 1.453c-.656.468-1.594.28-2.063-.422-.468-.703-.28-1.594.422-2.063l4.5-3c.469-.328 1.032-.328 1.547-.093.469.28.797.796.797 1.312' />
    </g>
    <defs>
      <clipPath id='047a52364294e980f45ab4a9aa879f26__a'>
        <path d='M0 0h12v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedOneXlFillIcon);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBellXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.75 6.75c0-.375.328-.75.75-.75.375 0 .75.375.75.75v.797C15 7.922 18 11.109 18 15v1.406c0 2.016.797 3.985 2.25 5.438l.14.14c.376.375.61.938.61 1.453a2.1 2.1 0 0 1-2.11 2.11H2.064C.89 25.5 0 24.609 0 23.437c0-.562.188-1.078.61-1.453l.093-.14C2.156 20.39 3 18.422 3 16.406V15a7.484 7.484 0 0 1 6.75-7.453zM10.5 9c-3.328 0-6 2.719-6 6v1.406a9.23 9.23 0 0 1-2.719 6.516l-.14.094a.76.76 0 0 0-.141.422c0 .328.234.562.563.562H18.89c.328 0 .609-.234.609-.562 0-.141-.094-.282-.187-.422l-.141-.094a9.26 9.26 0 0 1-2.719-6.563V15c0-3.281-2.672-6-6-6zM9.047 27.516c.234.609.797.984 1.453.984.61 0 1.172-.375 1.406-.984.14-.375.563-.61.938-.47.375.142.61.563.469.985A2.99 2.99 0 0 1 10.5 30c-1.312 0-2.437-.797-2.86-1.969a.785.785 0 0 1 .47-.984c.374-.14.796.094.937.469' />
    </g>
    <defs>
      <clipPath id='1e336b3a8895cf9a79a9b48a54c16098__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellXlRegularIcon);
export default ForwardRef;

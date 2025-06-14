import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPenLineXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M20.11 7.875c-.422-.422-1.126-.422-1.594 0l-2.532 2.578 3.563 3.563 2.578-2.532c.422-.468.422-1.171 0-1.593zM3.89 22.547c-.374.328-.609.797-.75 1.265l-1.312 4.36 4.36-1.266a2.8 2.8 0 0 0 1.265-.797l11.063-11.015-3.61-3.61zm13.594-15.75a2.69 2.69 0 0 1 3.703 0l2.016 2.016a2.69 2.69 0 0 1 0 3.703L8.531 27.188c-.562.515-1.219.937-1.922 1.125L.938 30a.73.73 0 0 1-.75-.187c-.188-.188-.235-.47-.188-.75l1.688-5.672c.187-.703.609-1.36 1.125-1.922zM11.25 28.5h15c.375 0 .75.375.75.75 0 .422-.375.75-.75.75h-15a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75' />
    </g>
    <defs>
      <clipPath id='3a9b1b7c43e823c64ad9b7aafa7de9d1__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenLineXlRegularIcon);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedStarXlBoldIcon = (
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
      <path d='M13.453 6c.469 0 .844.281 1.031.656l3.235 6.61 7.172 1.078c.422.047.75.328.89.75s.047.844-.281 1.172l-5.203 5.156 1.219 7.265a1.13 1.13 0 0 1-.422 1.125c-.375.235-.844.282-1.219.094l-6.422-3.468-6.375 3.468c-.422.188-.844.14-1.219-.093-.328-.282-.515-.704-.421-1.125l1.218-7.266-5.203-5.156a1.1 1.1 0 0 1-.281-1.172c.14-.375.469-.703.89-.75l7.172-1.078 3.235-6.61c.187-.375.562-.656.984-.656m0 3.703-2.437 5.11c-.188.328-.47.562-.844.609l-5.531.797 3.984 3.984c.281.281.422.656.328.985l-.937 5.625 4.922-2.625c.328-.188.75-.188 1.078 0l4.922 2.625L18 21.234a.97.97 0 0 1 .328-.984l3.985-4.031-5.532-.797c-.375-.047-.656-.281-.843-.61z' />
    </g>
    <defs>
      <clipPath id='66bec70292b95fcae2d09be7b0a66c53__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStarXlBoldIcon);
export default ForwardRef;

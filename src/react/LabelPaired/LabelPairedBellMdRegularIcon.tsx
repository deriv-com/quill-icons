import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBellMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.5 4.5c0-.25.219-.5.5-.5.25 0 .5.25.5.5v.531C10 5.281 12 7.406 12 10v.938c0 1.343.531 2.656 1.5 3.624l.094.094c.25.25.406.625.406.969a1.4 1.4 0 0 1-1.406 1.406H1.375C.594 17 0 16.406 0 15.625c0-.375.125-.719.406-.969l.063-.094C1.438 13.595 2 12.283 2 10.939V10a4.99 4.99 0 0 1 4.5-4.969zM7 6c-2.219 0-4 1.813-4 4v.938a6.15 6.15 0 0 1-1.812 4.343l-.094.063a.5.5 0 0 0-.094.281c0 .219.156.375.375.375h11.219c.219 0 .406-.156.406-.375 0-.094-.062-.187-.125-.281l-.094-.063a6.17 6.17 0 0 1-1.812-4.375V10c0-2.187-1.781-4-4-4zm-.969 12.344c.157.406.532.656.969.656.406 0 .781-.25.938-.656.093-.25.375-.407.625-.313s.406.375.312.657A1.99 1.99 0 0 1 7 20a2.005 2.005 0 0 1-1.906-1.312.524.524 0 0 1 .312-.657c.25-.093.532.063.625.313' />
    </g>
    <defs>
      <clipPath id='8213856e2a21e04b8a0871a510776f19__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellMdRegularIcon);
export default ForwardRef;

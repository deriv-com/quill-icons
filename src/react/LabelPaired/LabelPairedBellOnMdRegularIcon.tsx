import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBellOnMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M18.938 4.281a.513.513 0 0 1-.22.688l-2 1c-.25.125-.562 0-.687-.219a.513.513 0 0 1 .219-.687l2-1a.513.513 0 0 1 .688.218M9.5 4.5c0-.25.219-.5.5-.5.25 0 .5.25.5.5v.531C13 5.281 15 7.406 15 10v.938c0 1.343.531 2.656 1.5 3.624l.094.094c.25.25.406.625.406.969a1.4 1.4 0 0 1-1.406 1.406H4.375C3.594 17 3 16.406 3 15.625c0-.375.125-.719.406-.969l.063-.094A5.18 5.18 0 0 0 5 10.907V10a4.99 4.99 0 0 1 4.5-4.969zM10 6c-2.219 0-4 1.813-4 4v.938a6.15 6.15 0 0 1-1.812 4.343l-.094.094c-.063.063-.125.156-.125.25 0 .219.187.406.406.406h11.219a.414.414 0 0 0 .406-.406c0-.094-.062-.187-.125-.25l-.094-.094a6.15 6.15 0 0 1-1.812-4.344V10c0-2.187-1.781-4-4-4zm-.969 12.344c.156.406.531.656.969.656.406 0 .781-.25.938-.656.093-.25.374-.407.624-.313s.407.375.313.657A1.99 1.99 0 0 1 10 20a2.005 2.005 0 0 1-1.906-1.312.524.524 0 0 1 .312-.657c.25-.093.531.063.625.313M0 9.5c0-.25.219-.5.5-.5H3c.25 0 .5.25.5.5 0 .281-.25.5-.5.5H.5a.494.494 0 0 1-.5-.5M17 9h2.5c.25 0 .5.25.5.5 0 .281-.25.5-.5.5H17a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5M1.25 4.969a.513.513 0 0 1-.219-.688.513.513 0 0 1 .688-.218l2 1c.25.125.344.437.219.687-.126.219-.438.344-.688.219z' />
    </g>
    <defs>
      <clipPath id='55b3a5586e13b3040ddfc948558e1af1__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellOnMdRegularIcon);
export default ForwardRef;

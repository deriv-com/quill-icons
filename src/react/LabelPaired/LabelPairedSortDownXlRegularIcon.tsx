import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSortDownXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.219 26.906c.047.094.14.094.281.094.094 0 .188 0 .234-.094l5.625-5.297c.094-.093.141-.14.141-.234a.4.4 0 0 0-.375-.375H1.828c-.187 0-.328.188-.328.375 0 .094 0 .14.094.234zm-1.032 1.125L.564 22.688C.188 22.359 0 21.844 0 21.375 0 20.344.797 19.5 1.828 19.5h11.297A1.88 1.88 0 0 1 15 21.375c0 .469-.234.984-.61 1.313L8.767 28.03c-.328.328-.797.469-1.266.469-.516 0-.984-.14-1.312-.469' />
    </g>
    <defs>
      <clipPath id='d3f2cdb3ee8698a793e6ed856ac5f97e__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortDownXlRegularIcon);
export default ForwardRef;

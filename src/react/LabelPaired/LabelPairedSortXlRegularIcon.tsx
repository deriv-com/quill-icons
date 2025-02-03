import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSortXlRegularIcon = (
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
      <path d='M1.594 14.438c-.094.093-.094.14-.094.234 0 .187.14.328.328.328h11.297c.188 0 .375-.14.375-.328a.26.26 0 0 0-.14-.235L7.733 9.142A.26.26 0 0 0 7.5 9q-.21 0-.281.14zM.563 13.359l5.625-5.343c.328-.328.796-.516 1.312-.516.469 0 .938.188 1.266.516l5.625 5.343c.375.329.609.844.609 1.313 0 1.031-.844 1.828-1.875 1.828H1.828A1.8 1.8 0 0 1 0 14.672c0-.469.188-.985.563-1.313m1.03 8.25 5.626 5.297c.047.094.14.094.281.094.094 0 .188 0 .234-.094l5.625-5.297c.094-.093.141-.14.141-.234a.4.4 0 0 0-.375-.375H1.828c-.187 0-.328.188-.328.375 0 .094 0 .14.094.234m-1.03 1.078C.188 22.36 0 21.845 0 21.376 0 20.344.797 19.5 1.828 19.5h11.297A1.88 1.88 0 0 1 15 21.375c0 .469-.234.984-.61 1.313L8.767 28.03c-.328.328-.797.469-1.266.469-.516 0-.984-.14-1.312-.469z' />
    </g>
    <defs>
      <clipPath id='df0ce3f7e7ec54f4b72538c68c004c02__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortXlRegularIcon);
export default ForwardRef;

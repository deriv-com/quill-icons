import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedAppStoreIosMdIcon = (
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
      <path d='M12.5 5c.813 0 1.5.688 1.5 1.5v11a1.5 1.5 0 0 1-1.5 1.5h-11A1.48 1.48 0 0 1 0 17.5v-11A1.5 1.5 0 0 1 1.5 5zM3.969 16.031 4.563 15c-.313-.406-.75-.531-1.25-.375l-.438.781c-.187.281-.062.688.219.844a.623.623 0 0 0 .875-.219m4.312-1.687c.281-.5-.062-1.25-.687-1.25H5.656l2.657-4.656c.187-.282.093-.657-.22-.844-.28-.157-.687-.063-.843.218l-.281.5-.282-.5c-.156-.28-.562-.375-.843-.218a.63.63 0 0 0-.25.843l.656 1.126-2.031 3.53H2.625A.627.627 0 0 0 2 13.72c0 .344.281.625.625.625zm3.094 0a.627.627 0 0 0 .625-.625.627.627 0 0 0-.625-.625H9.75c-.844-1.406-1.437-2.469-1.844-3.188-.375.313-.75 1.219-.218 2.125.5.875 1.28 2.219 2.312 4a.606.606 0 0 0 .844.219.606.606 0 0 0 .219-.844l-.594-1.062z' />
    </g>
    <defs>
      <clipPath id='e85686868bc2843ff14972d820c83380__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAppStoreIosMdIcon);
export default ForwardRef;

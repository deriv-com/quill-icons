import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpAZXlBoldIcon = (
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
      <path d='M19.5 7.5c.422 0 .797.281.984.656l3.75 7.5c.282.563.047 1.219-.515 1.5-.516.282-1.219.047-1.5-.515l-.61-1.266c-.093 0-.187.047-.234.047h-4.031l-.61 1.219c-.28.562-.937.797-1.5.515-.562-.281-.796-.937-.515-1.5l3.75-7.5A1.15 1.15 0 0 1 19.5 7.5m-1.031 5.625h2.015l-.984-1.969zM6.703 7.828a1.104 1.104 0 0 1 1.547 0l4.5 4.5c.469.469.469 1.172 0 1.594a1.027 1.027 0 0 1-1.547 0l-2.578-2.578v16.031A1.11 1.11 0 0 1 7.5 28.5c-.656 0-1.125-.469-1.125-1.125V11.344l-2.578 2.578c-.469.469-1.172.469-1.594 0a1.027 1.027 0 0 1 0-1.547l4.5-4.5zM16.5 19.5h6c.422 0 .844.281.984.703.188.375.141.844-.187 1.172l-4.313 4.875H22.5c.61 0 1.125.516 1.125 1.125A1.11 1.11 0 0 1 22.5 28.5h-6c-.469 0-.844-.234-1.031-.656-.188-.375-.14-.844.187-1.219l4.313-4.875H16.5c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125' />
    </g>
    <defs>
      <clipPath id='6a5e7a9c076b71a5b8d60cf974d4628a__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpAZXlBoldIcon);
export default ForwardRef;

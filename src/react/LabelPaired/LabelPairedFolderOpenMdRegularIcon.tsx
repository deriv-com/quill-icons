import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFolderOpenMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={24}
    viewBox='0 0 18 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M14 9c0-.531-.469-1-1-1H9.313a3.03 3.03 0 0 1-2.126-.875l-.812-.812.688-.72-.688.72A1.02 1.02 0 0 0 5.656 6H2c-.562 0-1 .469-1 1v8.969l1.594-4A1.49 1.49 0 0 1 4 11h12.5c.469 0 .938.25 1.219.688.281.406.343.906.156 1.374l-2 5c-.219.594-.781.938-1.375.938H2c-1.125 0-2-.875-2-2V7c0-1.094.875-2 2-2h3.656c.532 0 1.032.219 1.407.594l.843.843c.375.375.875.563 1.407.563H13c1.094 0 2 .906 2 2v1h-1zm-2 9h2.5a.47.47 0 0 0 .438-.312l2-5a.5.5 0 0 0-.032-.47A.53.53 0 0 0 16.5 12H4a.47.47 0 0 0-.469.344l-2 5a.44.44 0 0 0 .032.437c.093.157.25.219.437.219z' />
    </g>
    <defs>
      <clipPath id='5332ae631a2354de800cffb30a4c90f0__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFolderOpenMdRegularIcon);
export default ForwardRef;

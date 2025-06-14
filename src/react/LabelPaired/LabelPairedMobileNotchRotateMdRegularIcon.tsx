import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMobileNotchRotateMdRegularIcon = (
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
      <path d='M1 6c0-1.094.875-2 2-2h6c1.094 0 2 .906 2 2v4.625c-.094.031-.156.063-.219.094a1.7 1.7 0 0 0-.781-.625V6c0-.531-.469-1-1-1H8v.5c0 .563-.469 1-1 1H5c-.562 0-1-.437-1-1V5H3c-.562 0-1 .469-1 1v12c0 .563.438 1 1 1h6.219c.219.25.469.531.75.75-.281.156-.625.25-1 .25H3c-1.125 0-2-.875-2-2zm4-1v.5h2V5zm4 6.5c0-.25.219-.5.5-.5.25 0 .5.25.5.5v1.188A4.42 4.42 0 0 1 13.5 11c1.875 0 3.5 1.188 4.156 2.813.094.28-.031.562-.281.656-.25.125-.531 0-.656-.281A3.45 3.45 0 0 0 13.5 12c-1.187 0-2.25.594-2.875 1.5H12c.25 0 .5.25.5.5 0 .281-.25.5-.5.5H9.5A.494.494 0 0 1 9 14zm.313 5.688a.485.485 0 0 1 .28-.625c.25-.125.532 0 .657.25.5 1.312 1.781 2.187 3.25 2.187a3.44 3.44 0 0 0 2.844-1.5H15a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5h2.5c.25 0 .5.25.5.5v2.5c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5v-1.156A4.48 4.48 0 0 1 13.5 20a4.48 4.48 0 0 1-4.187-2.812' />
    </g>
    <defs>
      <clipPath id='f915875a144d10501e66087fe4546a09__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileNotchRotateMdRegularIcon);
export default ForwardRef;

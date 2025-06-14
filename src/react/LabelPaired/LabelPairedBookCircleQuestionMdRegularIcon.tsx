import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBookCircleQuestionMdRegularIcon = (
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
      <path d='M0 6c0-1.094.875-2 2-2h10.5c.813 0 1.5.688 1.5 1.5v4.719a3.5 3.5 0 0 0-1 .406V5.5c0-.25-.25-.5-.5-.5H4v11h6c.031.344.094.688.188 1H2c-.562 0-1 .469-1 1 0 .563.438 1 1 1h9.25c.313.406.656.719 1.063 1H2c-1.125 0-2-.875-2-2zm1 0v10.281A2.1 2.1 0 0 1 2 16h1V5H2c-.562 0-1 .469-1 1m4.5 2.5c0-.25.219-.5.5-.5h5c.25 0 .5.25.5.5 0 .281-.25.5-.5.5H6a.494.494 0 0 1-.5-.5m0 3c0-.25.219-.5.5-.5h5c.25 0 .5.25.5.5 0 .281-.25.5-.5.5H6a.494.494 0 0 1-.5-.5m5.5 4c0-2.469 2-4.5 4.5-4.5 2.469 0 4.5 2.031 4.5 4.5 0 2.5-2.031 4.5-4.5 4.5-2.5 0-4.5-2-4.5-4.5m1 0c0 1.938 1.563 3.5 3.5 3.5 1.906 0 3.5-1.562 3.5-3.5 0-1.906-1.594-3.5-3.5-3.5-1.937 0-3.5 1.594-3.5 3.5m1.5-1.187c0-.72.563-1.313 1.281-1.313h1.281c.782 0 1.438.656 1.438 1.438 0 .53-.312 1.03-.781 1.28l-.75.376a.47.47 0 0 1-.469.406.494.494 0 0 1-.5-.5v-.187c0-.188.094-.376.25-.47l1-.5a.49.49 0 0 0 .25-.405.47.47 0 0 0-.437-.438H14.78c-.156 0-.281.156-.281.313v.187c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5zM15 17.5c0-.25.219-.5.5-.5.25 0 .5.25.5.5 0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5' />
    </g>
    <defs>
      <clipPath id='b39a10ce1d3645070c1f830f5a8d5baa__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBookCircleQuestionMdRegularIcon);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBoxArchiveCircleArrowDownMdFillIcon = (
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
      <path d='M0 6c0-.531.438-1 1-1h14c.531 0 1 .469 1 1v1c0 .563-.469 1-1 1H1c-.562 0-1-.437-1-1zm1 3h14v1.031c-2.812.25-5 2.625-5 5.469 0 1.344.469 2.563 1.25 3.5H3c-1.125 0-2-.875-2-2zm4 2.5c0 .281.219.5.5.5h5c.25 0 .5-.219.5-.5 0-.25-.25-.5-.5-.5h-5c-.281 0-.5.25-.5.5m6 4c0-1.594.844-3.094 2.25-3.875a4.46 4.46 0 0 1 4.5 0A4.49 4.49 0 0 1 20 15.5a4.54 4.54 0 0 1-2.25 3.906 4.46 4.46 0 0 1-4.5 0A4.47 4.47 0 0 1 11 15.5m2.375-.094a.53.53 0 0 0 0 .719l1.75 1.75a.53.53 0 0 0 .719 0l1.75-1.75a.53.53 0 0 0 0-.719.53.53 0 0 0-.719 0l-.875.906V13.5c0-.25-.25-.5-.5-.5-.281 0-.5.25-.5.5v2.813l-.906-.907a.53.53 0 0 0-.719 0' />
    </g>
    <defs>
      <clipPath id='908b95048bed9165641a6a04e6a06686__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBoxArchiveCircleArrowDownMdFillIcon);
export default ForwardRef;

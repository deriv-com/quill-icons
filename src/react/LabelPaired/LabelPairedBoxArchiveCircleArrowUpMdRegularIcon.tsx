import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBoxArchiveCircleArrowUpMdRegularIcon = (
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
      <path d='M0 6c0-.531.438-1 1-1h14c.531 0 1 .469 1 1v2c0 .563-.469 1-1 1H1c-.562 0-1-.437-1-1zm1 0v2h14V6zm0 4h1v7c0 .563.438 1 1 1h7.594c.187.375.406.719.656 1H3c-1.125 0-2-.875-2-2zm4 1.5c0-.25.219-.5.5-.5h5c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-5a.494.494 0 0 1-.5-.5m6.594 1.75A4.54 4.54 0 0 1 15.5 11a4.49 4.49 0 0 1 3.875 2.25 4.46 4.46 0 0 1 0 4.5C18.594 19.156 17.094 20 15.5 20a4.47 4.47 0 0 1-3.906-2.25 4.46 4.46 0 0 1 0-4.5m.875.5c-.625 1.094-.625 2.438 0 3.5A3.48 3.48 0 0 0 15.5 19c1.25 0 2.406-.656 3.031-1.75.625-1.062.625-2.406 0-3.5A3.54 3.54 0 0 0 15.5 12c-1.25 0-2.406.688-3.031 1.75m.906 1.156 1.75-1.75a.53.53 0 0 1 .719 0l1.75 1.75a.53.53 0 0 1 0 .719.53.53 0 0 1-.719 0c-.281-.312-.594-.594-.875-.906V17.5c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5v-2.781c-.312.312-.625.594-.906.906a.53.53 0 0 1-.719 0 .53.53 0 0 1 0-.719M14 10h1v.031a5 5 0 0 0-1 .188z' />
    </g>
    <defs>
      <clipPath id='5aa058f76c0e923baa3047fd97a0fa8c__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBoxArchiveCircleArrowUpMdRegularIcon);
export default ForwardRef;

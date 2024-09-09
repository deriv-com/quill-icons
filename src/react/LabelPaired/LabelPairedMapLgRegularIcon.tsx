import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMapLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={30}
    viewBox='0 0 23 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.89 6.828a.46.46 0 0 1 .391-.039l8.555 2.461 5.625-2.266c.586-.234 1.289.196 1.289.86V20.93c0 .39-.234.742-.625.86l-6.055 2.42c-.117.08-.234.08-.39.04l-8.555-2.46L1.5 24.054a.916.916 0 0 1-1.25-.86V10.11c0-.39.234-.742.586-.859zM1.5 10.305v12.422l5-1.993V8.312zm13.75 12.5V10.383l-7.5-2.149v12.422zm1.25-.078 5-1.993V8.312l-5 1.993z' />
    </g>
    <defs>
      <clipPath id='3a28e1f416858934692ff604e98e741f__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMapLgRegularIcon);
export default ForwardRef;

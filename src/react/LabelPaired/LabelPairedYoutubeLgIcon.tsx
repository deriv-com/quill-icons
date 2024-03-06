import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedYoutubeLgIcon = (
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
      <path d='M21.734 10.344q.195.898.313 2.07.078 1.211.117 2.149v1.914a86 86 0 0 1-.117 2.109q-.117 1.21-.313 2.11-.468 1.445-1.914 1.874-.937.195-2.89.313-1.953.078-3.633.117H9.703q-1.68-.039-3.633-.117-1.953-.117-2.89-.313-1.446-.429-1.914-1.875a18 18 0 0 1-.313-2.11 86 86 0 0 1-.117-2.108v-1.914a96 96 0 0 1 .117-2.149q.117-1.171.313-2.07.468-1.446 1.914-1.914.937-.195 2.89-.313Q8.023 8.04 9.703 8h3.594q1.68.039 3.633.117 1.953.117 2.89.313 1.446.468 1.914 1.914m-12.422 8.36 5.586-3.204-5.585-3.164z' />
    </g>
    <defs>
      <clipPath id='20d7871e6e2dcb3409a7a2b8ed46f755__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedYoutubeLgIcon);
export default ForwardRef;

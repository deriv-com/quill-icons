import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedYoutubeLgIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={30}
    viewBox='0 0 23 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M21.734 10.344c.13.599.235 1.289.313 2.07.052.807.091 1.524.117 2.149V16.477a85.753 85.753 0 0 1-.117 2.109c-.078.807-.182 1.51-.313 2.11-.312.963-.95 1.588-1.914 1.874-.625.13-1.588.235-2.89.313-1.302.052-2.513.091-3.633.117H9.703c-1.12-.026-2.33-.065-3.633-.117-1.302-.078-2.265-.182-2.89-.313-.964-.286-1.602-.911-1.914-1.875a18.398 18.398 0 0 1-.313-2.11 85.54 85.54 0 0 1-.117-2.108v-1.915a95.61 95.61 0 0 1 .117-2.148c.078-.781.182-1.471.313-2.07.312-.964.95-1.602 1.914-1.914.625-.13 1.588-.235 2.89-.313C7.372 8.065 8.583 8.026 9.703 8h3.594c1.12.026 2.33.065 3.633.117 1.302.078 2.265.182 2.89.313.964.312 1.602.95 1.914 1.914Zm-12.422 8.36 5.586-3.204-5.585-3.164v6.367Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedYoutubeLgIcon);
export default ForwardRef;

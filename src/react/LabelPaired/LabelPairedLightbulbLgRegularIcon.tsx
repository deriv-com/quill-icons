import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLightbulbLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.11 15.617c.624-.937 1.015-2.031 1.015-3.242 0-3.086-2.54-5.625-5.625-5.625a5.626 5.626 0 0 0-5.625 5.625c0 1.21.352 2.305.977 3.242.156.195.351.469.546.742.508.664 1.055 1.446 1.485 2.227.351.625.547 1.289.625 1.953h-1.25c-.117-.469-.235-.937-.469-1.367-.39-.703-.86-1.367-1.367-2.031l-.586-.82C1.055 15.186.625 13.858.625 12.374A6.86 6.86 0 0 1 7.5 5.5c3.79 0 6.875 3.086 6.875 6.875 0 1.484-.469 2.813-1.25 3.945l-.586.82c-.508.665-.976 1.329-1.367 2.032-.235.43-.352.86-.469 1.328h-1.25c.117-.625.274-1.29.625-1.914.43-.781 1.016-1.563 1.485-2.266.195-.234.39-.508.546-.742zM7.5 9.25a3.11 3.11 0 0 0-3.125 3.125.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625C3.125 9.992 5.078 8 7.5 8c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625M5.703 23c.274.742.977 1.25 1.797 1.25.781 0 1.484-.508 1.758-1.25zm-1.328-.625v-.195c0-.235.156-.43.39-.43h5.43c.235 0 .43.195.43.43v.195A3.11 3.11 0 0 1 7.5 25.5c-1.758 0-3.125-1.367-3.125-3.125' />
    </g>
    <defs>
      <clipPath id='b1e92441b35268aeac36432c0ef5468f__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLightbulbLgRegularIcon);
export default ForwardRef;

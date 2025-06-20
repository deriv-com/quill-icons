import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleEnvelopeLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M18.75 15.5c0-3.125-1.68-5.977-4.375-7.54-2.734-1.6-6.055-1.6-8.75 0A8.63 8.63 0 0 0 1.25 15.5c0 3.164 1.64 6.016 4.375 7.578 2.695 1.602 6.016 1.602 8.75 0A8.73 8.73 0 0 0 18.75 15.5M0 15.5a9.93 9.93 0 0 1 5-8.633c3.086-1.797 6.875-1.797 10 0 3.086 1.797 5 5.078 5 8.633 0 3.594-1.914 6.875-5 8.672-3.125 1.797-6.914 1.797-10 0-3.125-1.797-5-5.078-5-8.672m6.25-3.75h7.5c.664 0 1.25.586 1.25 1.25v5c0 .703-.586 1.25-1.25 1.25h-7.5C5.547 19.25 5 18.703 5 18v-5c0-.664.547-1.25 1.25-1.25m7.5 1.914V13h-7.5v.664L9.688 15.5c.078.04.195.078.312.078a.7.7 0 0 0 .273-.078zm0 1.406-2.89 1.524a1.8 1.8 0 0 1-.86.234c-.312 0-.625-.078-.898-.234L6.25 15.07V18h7.5z' />
    </g>
    <defs>
      <clipPath id='f94d6df21761b65402feb5dc7ddc5aab__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleEnvelopeLgRegularIcon);
export default ForwardRef;

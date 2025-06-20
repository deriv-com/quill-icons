import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMessagesQuestionLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.89 16.75h5.86c.664 0 1.25-.547 1.25-1.25V8c0-.664-.586-1.25-1.25-1.25H2.5c-.703 0-1.25.586-1.25 1.25v7.5c0 .703.547 1.25 1.25 1.25h1.25c.664 0 1.25.586 1.25 1.25v.625l2.148-1.602c.235-.156.47-.273.743-.273M13.75 18H7.89l-3.163 2.383c-.196.156-.43.156-.665.078-.195-.117-.312-.313-.312-.586V18H2.5A2.47 2.47 0 0 1 0 15.5V8c0-1.367 1.094-2.5 2.5-2.5h11.25c1.367 0 2.5 1.133 2.5 2.5v7.5c0 1.406-1.133 2.5-2.5 2.5m-1.25 5a2.47 2.47 0 0 1-2.5-2.5v-1.25h1.25v1.25c0 .703.547 1.25 1.25 1.25h4.57c.274 0 .547.117.742.273L20 23.625V23c0-.664.547-1.25 1.25-1.25h1.25c.664 0 1.25-.547 1.25-1.25V13c0-.664-.586-1.25-1.25-1.25h-5V10.5h5c1.367 0 2.5 1.133 2.5 2.5v7.5c0 1.406-1.133 2.5-2.5 2.5h-1.25v1.875c0 .273-.156.469-.352.586-.234.078-.468.078-.664-.078L17.07 23zM7.188 8.273c-.665 0-1.211.391-1.446.977v.04a.655.655 0 0 0 .39.82c.313.117.665-.079.782-.391l.04-.04c0-.117.116-.156.234-.156h1.601c.274 0 .469.196.469.43 0 .195-.078.352-.235.43l-1.21.703a.62.62 0 0 0-.313.547v.351c0 .352.273.625.625.625a.64.64 0 0 0 .625-.625l.898-.546c.547-.274.86-.86.86-1.446 0-.976-.781-1.719-1.719-1.719zm.937 7.032a.76.76 0 0 0 .781-.43.76.76 0 0 0 0-.898c-.156-.274-.469-.47-.781-.43a.85.85 0 0 0-.82.43.76.76 0 0 0 0 .898c.156.313.468.469.82.43' />
    </g>
    <defs>
      <clipPath id='1f701f761cdb93062637d5ab51331024__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMessagesQuestionLgRegularIcon);
export default ForwardRef;

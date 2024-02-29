import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileCertificateLgBoldIcon = (
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
      <path d='M17.5 23.625q.585-.039.625-.625V11.75H15q-.547 0-.898-.352-.352-.35-.352-.898V7.375H7.5q-.585.039-.625.625v2.656a2.13 2.13 0 0 0-1.602 0l-.234.078q0 .04-.039.04V8q.039-1.055.742-1.758T7.5 5.5h6.484q1.016 0 1.758.742l3.516 3.516Q20 10.5 20 11.555V23q-.039 1.055-.742 1.758-.704.703-1.758.742H8.633a1.8 1.8 0 0 0 .117-.625v-1.25zM4.258 11.828l.625.235a.36.36 0 0 0 .234 0l.625-.235q.664-.234 1.094.274l.43.546a.5.5 0 0 0 .195.118l.664.078q.664.117.781.781l.117.664q0 .117.118.234l.507.391q.508.469.313 1.094l-.274.625a.36.36 0 0 0 0 .234l.235.625q.234.625-.274 1.094l-.546.39a.5.5 0 0 0-.118.235l-.078.664q-.117.664-.781.781l-.625.078v4.141a.61.61 0 0 1-.312.547.67.67 0 0 1-.665-.04L5 24.368l-1.523 1.016a.6.6 0 0 1-.625.039q-.352-.195-.352-.547v-4.14l-.625-.079q-.664-.117-.781-.781l-.078-.664a.5.5 0 0 0-.118-.234l-.546-.391q-.508-.469-.274-1.094l.235-.625a.36.36 0 0 0 0-.234l-.235-.625q-.234-.625.274-1.094l.546-.39a.5.5 0 0 0 .118-.235l.078-.664q.117-.664.82-.781l.625-.078a.5.5 0 0 0 .234-.118l.391-.546q.469-.508 1.094-.274M2.5 16.75q.04 1.407 1.25 2.148 1.25.705 2.5 0 1.21-.741 1.25-2.148-.04-1.406-1.25-2.148-1.25-.705-2.5 0-1.21.741-1.25 2.148' />
    </g>
    <defs>
      <clipPath id='195997dccc23fe316c3972afe11d77b4__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCertificateLgBoldIcon);
export default ForwardRef;

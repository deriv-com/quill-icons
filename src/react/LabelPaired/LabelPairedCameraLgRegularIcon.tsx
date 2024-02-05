import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCameraLgRegularIcon = (
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
      <path d='M7.46 6.75h5.08q1.287.078 1.796 1.29l.39 1.21H17.5q1.055.039 1.758.742T20 11.75v10q-.039 1.055-.742 1.758-.704.703-1.758.742h-15q-1.055-.039-1.758-.742Q.04 22.804 0 21.75v-10q.039-1.055.742-1.758T2.5 9.25h2.773l.43-1.21q.47-1.212 1.758-1.29m-.585 1.68-.547 1.64a.65.65 0 0 1-.586.43H2.5q-.547 0-.898.352-.352.35-.352.898v10q0 .547.352.898.35.352.898.352h15q.547 0 .898-.352.352-.35.352-.898v-10q0-.547-.352-.898-.35-.352-.898-.352h-3.242a.65.65 0 0 1-.586-.43l-.547-1.64a.65.65 0 0 0-.586-.43H7.461a.65.65 0 0 0-.586.43M10 21.125q-1.172 0-2.187-.586a4.3 4.3 0 0 1-1.602-1.602 4.3 4.3 0 0 1-.586-2.187q0-1.172.586-2.187.585-1.016 1.601-1.602A4.3 4.3 0 0 1 10 12.375q1.171 0 2.188.586 1.015.585 1.601 1.601t.586 2.188-.586 2.188a4.3 4.3 0 0 1-1.601 1.601 4.3 4.3 0 0 1-2.188.586M6.875 16.75q.039 1.758 1.563 2.695 1.562.86 3.124 0 1.524-.937 1.563-2.695-.04-1.758-1.562-2.695-1.563-.86-3.126 0-1.523.937-1.562 2.695' />
    </g>
    <defs>
      <clipPath id='9ceea7266b01ac3616501ad3f3df73f7__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCameraLgRegularIcon);
export default ForwardRef;

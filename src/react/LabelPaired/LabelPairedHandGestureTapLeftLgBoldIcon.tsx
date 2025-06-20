import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHandGestureTapLeftLgBoldIcon = (
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
      <path d='M5.352 13c0-1.367 1.132-2.5 2.5-2.5 1.367 0 2.5 1.133 2.5 2.5 0 .43-.079.82-.274 1.172l.781 1.601.04-.039c.039-.039.078-.039.117-.078.507-.234 1.132-.156 1.601.156.078-.078.195-.117.313-.195a1.59 1.59 0 0 1 1.562.156c.04-.039.078-.039.078-.078.04 0 .078-.039.117-.039a1.526 1.526 0 0 1 2.07.742l1.095 2.305a2.866 2.866 0 0 1-1.407 3.867l-2.773 1.328c-.586.274-1.25.391-1.875.352h-.078a3.71 3.71 0 0 1-3.047-2.11l-.078-.234c-.274-.547-.313-1.172-.078-1.718l.273-.625c.04-.118.117-.274.195-.43l-1.757-3.711A2.52 2.52 0 0 1 5.352 13m2.382-.117c.508-.235 1.055-.195 1.485.078 0-.742-.625-1.328-1.367-1.328-.743 0-1.368.625-1.368 1.367 0 .39.157.742.391.977.117-.47.39-.86.86-1.094m3.282 7.773-.04-.039c.118.195 0 .43-.156.547-.234.078-.43 0-.547-.195l-.43-.938-.234.586a.91.91 0 0 0 0 .781l.118.235a2.53 2.53 0 0 0 2.07 1.445h.078q.703.06 1.29-.234l2.812-1.328c.859-.391 1.21-1.446.82-2.305l-1.094-2.305c-.078-.195-.351-.273-.508-.195a.47.47 0 0 0-.195.195.68.68 0 0 1-.547.274.61.61 0 0 1-.508-.313c-.078-.195-.312-.273-.508-.195-.117.078-.195.156-.234.273-.039.235-.234.47-.508.47-.234.038-.468-.118-.586-.313l-.078-.196c-.078-.195-.351-.234-.508-.156-.117.04-.195.117-.234.273a.51.51 0 0 1-.508.43.55.55 0 0 1-.586-.312l-.976-2.032-.469-1.054c-.117-.117-.352-.196-.508-.117a.39.39 0 0 0-.195.43l.469 1.054zM4.296 6.75a.56.56 0 0 0-.546.547v16.445c0 .274.234.547.547.547a.56.56 0 0 0 .547-.547V7.297a.56.56 0 0 0-.547-.547' />
    </g>
    <defs>
      <clipPath id='6796d44ec3f1d5f0e610c02562c48d9b__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHandGestureTapLeftLgBoldIcon);
export default ForwardRef;

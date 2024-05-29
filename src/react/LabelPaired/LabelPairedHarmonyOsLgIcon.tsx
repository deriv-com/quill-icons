import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHarmonyOsLgIcon = (
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
      <path d='M6.563 5.5h11.835A4.1 4.1 0 0 1 22.5 9.602v11.836c0 2.265-1.836 4.062-4.102 4.062H6.563A4.035 4.035 0 0 1 2.5 21.438V9.602C2.5 7.336 4.297 5.5 6.563 5.5m.78 4.61v4.492h.9v-1.915h1.952v1.915h.86v-4.493h-.86v1.758H8.242V10.11zm6.095 0v4.492h.859v-2.227l-.078-.742h.078l1.172 1.992h.508l1.21-1.992h.04l-.04.742v2.227h.86v-4.493h-.86l-1.445 2.344h-.039l-1.406-2.344zm1.757 10.859c.196.039.39.078.586.078s.39-.04.586-.078c.195-.078.352-.157.508-.274s.273-.234.39-.39c.079-.196.157-.39.157-.625 0-.196-.04-.352-.117-.508a1.04 1.04 0 0 0-.235-.39c-.117-.118-.273-.196-.43-.274a6 6 0 0 0-.507-.235l-.274-.078c-.273-.078-.468-.195-.625-.273-.117-.078-.156-.195-.156-.352 0-.117.04-.234.195-.312.118-.117.274-.156.47-.156.194 0 .35.078.468.156a.9.9 0 0 1 .234.351l.82-.312c-.038-.117-.117-.195-.195-.313-.039-.117-.156-.234-.273-.312a.9.9 0 0 0-.469-.235c-.156-.078-.351-.078-.586-.078s-.469 0-.625.078a2.1 2.1 0 0 0-.508.274c-.117.117-.234.234-.312.39a1.08 1.08 0 0 0 0 .977c.078.117.156.235.273.352.078.078.196.195.352.234.117.078.234.156.39.195l.274.078c.195.079.312.118.43.196.117.039.234.078.312.156.04.04.117.117.156.195 0 .04.04.118.04.196 0 .117-.04.195-.079.234-.039.078-.078.117-.156.195-.078.04-.117.078-.234.078-.078.04-.157.04-.274.04a.8.8 0 0 1-.586-.235.86.86 0 0 1-.312-.547l-.86.313c.079.195.157.39.274.547.117.156.234.273.39.39.157.117.352.196.508.274m-5.976.078c.312 0 .625-.078.898-.195.274-.118.508-.274.742-.508.196-.196.352-.469.47-.742.116-.274.155-.586.155-.899 0-.351-.039-.664-.156-.937-.117-.274-.273-.547-.469-.743-.234-.195-.468-.39-.742-.507-.273-.118-.586-.157-.898-.157s-.625.04-.899.157a2.1 2.1 0 0 0-.742.507c-.195.196-.351.47-.469.743a2.4 2.4 0 0 0-.195.937c0 .313.078.625.195.899.118.273.274.546.47.742.194.234.429.39.741.508.274.117.586.195.899.195m0-.82q-.293 0-.586-.118c-.156-.078-.313-.156-.469-.312a1.4 1.4 0 0 1-.312-.469 1.825 1.825 0 0 1 0-1.289c.078-.156.195-.351.312-.469.156-.117.313-.234.469-.312q.292-.117.586-.117c.195 0 .39.039.547.117.195.078.351.195.468.312.157.117.235.313.313.47a1.83 1.83 0 0 1 0 1.288c-.078.195-.156.352-.313.469-.117.156-.273.234-.468.312a1.25 1.25 0 0 1-.547.118m-1.68 1.21v.782h3.281v-.782z' />
    </g>
    <defs>
      <clipPath id='e94c737d497fe26a2015f52c130ebb8f__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHarmonyOsLgIcon);
export default ForwardRef;

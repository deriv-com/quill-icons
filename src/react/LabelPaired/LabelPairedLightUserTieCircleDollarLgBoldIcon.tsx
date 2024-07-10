import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLightUserTieCircleDollarLgBoldIcon = (
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
      <path d='M0 24.328c0-3.125 2.227-5.703 5.195-6.21.274-.04.508.077.625.312.586 1.133 1.133 2.304 1.72 3.437.194-.781.39-1.562.624-2.305-.273-.43-.508-.82-.742-1.21-.234-.43.039-.977.547-.977h1.523c.508 0 .781.547.547.977-.234.39-.469.78-.742 1.21.234.743.43 1.524.625 2.305.586-1.133 1.133-2.305 1.719-3.437.117-.235.351-.352.625-.313.156 0 .273.04.43.078-.157.547-.196 1.133-.196 1.68 0 .352 0 .664.04.977-.47.937-.938 1.875-1.407 2.773h2.46c.47.742 1.095 1.406 1.798 1.875H1.17A1.15 1.15 0 0 1 0 24.328m1.914-.703h4.414c-.586-1.133-1.133-2.266-1.719-3.398-1.406.585-2.46 1.875-2.695 3.398M3.75 10.5c0-1.758.938-3.437 2.5-4.297 1.523-.898 3.438-.898 5 0 1.523.86 2.5 2.54 2.5 4.297 0 1.797-.977 3.438-2.5 4.336-1.562.898-3.477.898-5 0a4.97 4.97 0 0 1-2.5-4.336m2.266-1.562c-.547.976-.547 2.187 0 3.124a3.16 3.16 0 0 0 2.734 1.563 3.1 3.1 0 0 0 2.695-1.562c.547-.938.547-2.149 0-3.126C10.898 8 9.844 7.376 8.75 7.376c-1.133 0-2.148.625-2.734 1.563m7.734 10.937c0-3.086 2.5-5.625 5.625-5.625 3.086 0 5.625 2.54 5.625 5.625a5.626 5.626 0 0 1-5.625 5.625 5.6 5.6 0 0 1-5.625-5.625m3.438-1.055c.039.625.43 1.016.82 1.211.351.196.781.313 1.133.39 0 .04.039.04.078.04.39.117.703.195.898.312.156.118.195.157.195.235s-.039.156-.039.156l-.156.156a2.1 2.1 0 0 1-.742.117c-.352 0-.703-.117-1.172-.273-.078 0-.156-.039-.234-.039-.313-.117-.664.078-.782.39-.078.352.079.704.43.782.04.039.117.039.195.078.274.078.586.195.938.234v.47c0 .35.273.624.625.624a.64.64 0 0 0 .625-.625v-.43q.352-.058.703-.234c.469-.273.86-.742.86-1.445-.04-.625-.43-1.016-.82-1.25-.352-.235-.821-.352-1.173-.469h-.039c-.39-.117-.703-.195-.937-.312-.157-.118-.157-.157-.157-.196v-.117c.04-.04.079-.078.196-.156.195-.078.469-.157.703-.157.352 0 .664.079 1.055.157.312.117.664-.117.742-.43.078-.352-.117-.703-.469-.781-.195-.04-.43-.078-.664-.117v-.391a.64.64 0 0 0-.625-.625.617.617 0 0 0-.625.625v.39q-.41.06-.703.235c-.469.234-.899.703-.86 1.445' />
    </g>
    <defs>
      <clipPath id='6acf7ec03566997952527b93f8ea573b__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLightUserTieCircleDollarLgBoldIcon);
export default ForwardRef;

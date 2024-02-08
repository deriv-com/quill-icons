import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlaceholderLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.688 6.75h.937q.585.039.625.625-.039.585-.625.625h-.937q-.938.039-1.563.625-.585.625-.625 1.563v.937q-.039.585-.625.625-.585-.039-.625-.625v-.937q.04-1.446 1.016-2.422.975-.977 2.422-1.016M.874 13q.586.039.625.625v3.75q-.039.585-.625.625-.585-.039-.625-.625v-3.75Q.289 13.04.875 13m16.25 0q.585.039.625.625v3.75q-.039.585-.625.625-.585-.039-.625-.625v-3.75q.039-.585.625-.625m0-1.25q-.585-.039-.625-.625v-.937q-.039-.938-.625-1.563Q15.25 8.04 14.313 8h-.938q-.585-.039-.625-.625.039-.585.625-.625h.938q1.444.04 2.421 1.016t1.016 2.422v.937q-.039.585-.625.625m.625 8.125v.938q-.04 1.445-1.016 2.421-.976.977-2.422 1.016h-.937q-.585-.039-.625-.625.039-.585.625-.625h.938q.936-.039 1.562-.625.585-.625.625-1.562v-.938q.039-.585.625-.625.585.039.625.625m-16.25 0v.938q.039.937.625 1.562.625.585 1.563.625h.937q.585.039.625.625-.039.585-.625.625h-.937q-1.446-.04-2.422-1.016Q.289 22.26.25 20.812v-.937q.039-.585.625-.625.586.039.625.625m5.625 4.375q-.585-.039-.625-.625.039-.585.625-.625h3.75q.585.039.625.625-.039.585-.625.625zM6.5 7.375q.039-.585.625-.625h3.75q.585.039.625.625-.039.585-.625.625h-3.75q-.585-.039-.625-.625' />
    </g>
    <defs>
      <clipPath id='84f3ee3724f563f6f6db30ac2aba84f8__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlaceholderLgRegularIcon);
export default ForwardRef;

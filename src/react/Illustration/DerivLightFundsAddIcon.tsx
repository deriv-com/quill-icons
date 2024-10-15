import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightFundsAddIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 128 128'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#EBECEE'
      d='M111.065 63.19c-.01 1.722-.122 6.159-1.47 11.709-.582 2.394-1.709 6.907-4.629 12.153-2.543 4.568-5.21 7.48-5.831 8.145a39 39 0 0 1-6.99 5.92q-7.705 3.73-15.412 7.459a37 37 0 0 0 4.18-2.489 38 38 0 0 0 9.29-9.111c2.933-4.079 4.3-7.691 5.253-10.269.593-1.602 2.067-5.838 2.76-11.574.279-2.318.746-7.473-.179-13.978-.177-1.243-.97-6.512-3.531-13.028a62.8 62.8 0 0 0-7.657-13.918c-2.296-3.153-6.019-8.182-12.553-12.852-5.179-3.7-9.77-5.494-11.277-6.054-2.953-1.096-9.763-3.543-18.727-2.818-5.553.445-9.722 1.931-11.407 2.611q6.103-2.999 12.21-5.994a42 42 0 0 1 4.941-1.557c5.161-1.285 9.371-1.295 11.127-1.248 7.466.2 13.002 2.525 16.026 3.829 1.106.476 6.426 2.819 12.287 7.613 2.104 1.72 6.163 5.299 10.104 10.817 2.759 3.861 4.347 7.111 5.253 8.991 3.114 6.452 4.396 11.779 4.763 13.4.584 2.573 1.497 6.705 1.47 12.243z'
    />
    <path
      fill='#000'
      d='M76.732 108.862a.286.286 0 0 1-.13-.54 37 37 0 0 0 4.147-2.469 38 38 0 0 0 9.22-9.043c2.973-4.134 4.323-7.786 5.217-10.201C96.502 83.05 97.45 79.07 97.93 75.1c.54-4.481.479-9.29-.177-13.904-.27-1.895-1.151-6.952-3.514-12.963a62.4 62.4 0 0 0-7.623-13.854c-2.049-2.815-5.862-8.052-12.489-12.787-3.487-2.492-7.468-4.629-11.211-6.019-2.606-.967-9.527-3.536-18.604-2.802-5.32.428-9.379 1.808-11.323 2.592a.285.285 0 0 1-.233-.521q6.105-2.999 12.21-5.995l.023-.01a42.5 42.5 0 0 1 4.974-1.568c4.666-1.162 8.669-1.323 11.204-1.256 7.673.206 13.386 2.669 16.132 3.851 1.904.82 6.92 3.209 12.354 7.655 3.757 3.07 7.269 6.83 10.156 10.873 2.833 3.964 4.424 7.261 5.278 9.032 2.845 5.892 4.219 10.963 4.785 13.46.525 2.315 1.505 6.623 1.477 12.307-.022 3.81-.532 7.882-1.477 11.775-.54 2.221-1.663 6.846-4.658 12.224-2.368 4.256-4.895 7.154-5.872 8.203a39.3 39.3 0 0 1-7.04 5.964q-.016.01-.033.019l-15.413 7.458a.3.3 0 0 1-.124.029zM47.539 12.07c7.58 0 13.261 2.109 15.577 2.967 3.788 1.407 7.817 3.57 11.344 6.09 6.702 4.789 10.55 10.076 12.619 12.916a63 63 0 0 1 7.693 13.981c2.385 6.069 3.277 11.178 3.548 13.092.663 4.663.725 9.523.179 14.053-.486 4.014-1.446 8.04-2.776 11.638-.904 2.444-2.271 6.139-5.29 10.336a38.7 38.7 0 0 1-8.613 8.653l10.183-4.929a38.7 38.7 0 0 0 6.921-5.866c.963-1.032 3.453-3.89 5.792-8.09 2.956-5.31 4.067-9.882 4.601-12.08.936-3.85 1.44-7.877 1.462-11.642.028-5.619-.942-9.886-1.463-12.178-.562-2.474-1.923-7.498-4.742-13.338-.847-1.756-2.424-5.024-5.228-8.95-2.859-4.001-6.334-7.723-10.053-10.761-5.379-4.402-10.337-6.762-12.219-7.573-2.712-1.169-8.358-3.602-15.92-3.805-2.5-.067-6.448.093-11.052 1.239a42 42 0 0 0-4.896 1.543q-4.215 2.068-8.429 4.137A41.4 41.4 0 0 1 47.54 12.07'
    />
    <path
      fill='#fff'
      d='M25.535 97.512c-4.696-4.715-7.448-9.013-8.37-10.506-.603-.98-2.613-4.302-4.51-9.022-2.373-5.905-3.268-10.758-3.562-12.524-1.246-7.466-.714-13.276-.564-14.75.301-2.946.883-8.217 3.62-14.483 3.246-7.43 7.633-11.931 8.517-12.82 5.131-5.164 10.314-7.497 11.574-8.043.942-.407 5.547-2.354 12.049-2.878 8.964-.723 15.774 1.723 18.727 2.82 1.507.56 6.099 2.353 11.277 6.054 6.536 4.67 10.259 9.697 12.554 12.85a62.7 62.7 0 0 1 7.657 13.919c2.563 6.517 3.355 11.785 3.532 13.028.924 6.506.459 11.659.178 13.979-.692 5.734-2.167 9.971-2.76 11.574-.954 2.577-2.32 6.19-5.252 10.269a38.1 38.1 0 0 1-9.289 9.111 38 38 0 0 1-11.367 5.283c-8.599 2.371-15.692 1.043-18.846.416-1.517-.302-6.688-1.415-12.673-4.63-6.087-3.27-9.902-7.045-12.494-9.646z'
    />
    <path
      fill='#000'
      d='M59.447 113.01c-4.067 0-7.2-.624-8.801-.943-2.422-.481-7.296-1.727-12.751-4.658-6.25-3.358-10.2-7.325-12.562-9.696-4.111-4.129-6.843-8.02-8.41-10.557-.951-1.542-2.807-4.77-4.533-9.066-2.09-5.2-3.098-9.713-3.578-12.583-1.125-6.731-.837-12.178-.566-14.826.27-2.64.831-8.134 3.643-14.568 3.01-6.889 7-11.321 8.577-12.907 4.804-4.834 9.757-7.277 11.663-8.103 1.64-.71 6.104-2.414 12.14-2.902 9.21-.742 16.213 1.858 18.848 2.836 3.789 1.407 7.818 3.569 11.345 6.09 6.705 4.792 10.551 10.076 12.618 12.915a62.8 62.8 0 0 1 7.692 13.982c2.385 6.068 3.275 11.178 3.548 13.093.665 4.67.726 9.53.179 14.053-.487 4.023-1.446 8.047-2.776 11.639-.906 2.445-2.273 6.142-5.288 10.335a38.6 38.6 0 0 1-9.36 9.18 38 38 0 0 1-11.452 5.323 38.2 38.2 0 0 1-10.174 1.363zm-33.711-15.7c2.339 2.349 6.253 6.279 12.427 9.596 5.39 2.895 10.203 4.125 12.593 4.601 2.736.544 10.006 1.992 18.713-.411a37.4 37.4 0 0 0 11.28-5.243 38 38 0 0 0 9.218-9.043c2.97-4.131 4.323-7.784 5.218-10.201 1.314-3.55 2.262-7.53 2.744-11.51.541-4.475.48-9.282-.177-13.905-.27-1.895-1.152-6.953-3.515-12.964a62.4 62.4 0 0 0-7.621-13.856c-2.047-2.813-5.859-8.048-12.489-12.785-3.487-2.492-7.468-4.63-11.211-6.019-2.604-.967-9.52-3.534-18.604-2.803-5.95.48-10.345 2.157-11.959 2.856-1.876.813-6.751 3.217-11.486 7.981-1.553 1.563-5.487 5.935-8.458 12.735C9.633 42.69 9.077 48.124 8.81 50.736c-.268 2.618-.551 8.008.562 14.674.474 2.843 1.474 7.312 3.544 12.464 1.71 4.257 3.547 7.453 4.488 8.979 1.552 2.511 4.256 6.364 8.33 10.454z'
    />
    <path fill='#fff' d='m53.356 83.744.006 6.983z' />
    <path
      fill='#000'
      d='M53.36 83.459c.156 0 .285.128.285.285v6.983a.287.287 0 0 1-.286.286.287.287 0 0 1-.286-.286v-6.983c0-.157.129-.285.286-.285'
    />
    <path fill='#fff' d='M53.354 41.39q.007-3.503.017-7.006z' />
    <path
      fill='#000'
      d='M53.353 41.676a.284.284 0 0 1-.284-.286l.017-7.006c0-.157.129-.285.286-.285s.286.128.284.285l-.017 7.006a.287.287 0 0 1-.286.286'
    />
    <path
      fill='#fff'
      d='M43.853 53.222c.021-.67.1-1.6.358-2.673.223-.926.813-3.262 2.769-5.465.761-.857 2.507-2.771 5.464-3.484.924-.223 2.906-.671 5.154.191 2.592.995 3.825 3.072 4.225 3.77 1.377 2.405 1.21 4.742 1.121 5.966-.031.442-.167 1.97-.907 3.794-.324.8-1.07 2.585-2.816 4.248a11.5 11.5 0 0 1-2.983 2.052c-1.66.78-3.174 1.075-3.174 1.075-.39.076-.834.14-1.47.361a9 9 0 0 0-1.656.787c-.3.176-1.013.612-1.814 1.31a13 13 0 0 0-2.697 3.293A12.4 12.4 0 0 0 43.9 73.22c-.105.976-.26 2.61.381 4.559.54 1.637 1.377 2.69 1.599 2.958 1.258 1.532 2.685 2.207 3.031 2.363.447.203 2.227.959 4.559.644 1.924-.26 3.22-1.112 4.081-1.694 1.846-1.247 2.844-2.723 3.46-3.651.443-.668 1.039-1.582 1.48-2.936.486-1.49.549-2.797.526-3.651'
    />
    <path
      fill='#000'
      d='M52.352 40.994q.553-.002 1.156.077c2.03.274 3.39 1.191 4.203 1.741 1.931 1.305 2.977 2.883 3.538 3.73.419.632 1.052 1.588 1.513 3.005.393 1.205.574 2.467.539 3.747a.285.285 0 0 1-.57-.016 10.5 10.5 0 0 0-.512-3.554c-.437-1.344-1.044-2.26-1.446-2.866-.578-.871-1.545-2.331-3.38-3.573-.772-.52-2.062-1.391-3.96-1.648a8.27 8.27 0 0 0-4.4.621c-.504.227-1.797.907-2.928 2.284a9 9 0 0 0-1.549 2.868c-.635 1.93-.462 3.561-.368 4.438a12.2 12.2 0 0 0 1.491 4.663 12.8 12.8 0 0 0 2.636 3.219c.551.481 1.163.922 1.77 1.278.347.203.87.51 1.604.764.52.18.907.253 1.25.316l.182.034v.003c.297.055 1.734.386 3.241 1.093.766.36 1.919 1.017 3.059 2.104 1.825 1.74 2.594 3.635 2.884 4.348.686 1.688.874 3.155.927 3.881.092 1.274.263 3.649-1.158 6.129-1.082 1.887-2.552 3.198-4.37 3.895-2.38.912-4.443.415-5.325.202-3.105-.749-4.925-2.8-5.611-3.573-2.043-2.303-2.637-4.776-2.833-5.587a13.5 13.5 0 0 1-.366-2.732.286.286 0 0 1 .277-.294c.159 0 .29.119.295.277.027.882.145 1.762.35 2.614.187.779.755 3.146 2.704 5.342.653.736 2.387 2.69 5.319 3.396.83.2 2.772.668 4.985-.18 1.692-.649 3.064-1.876 4.079-3.646 1.334-2.33 1.171-4.589 1.084-5.803a12.5 12.5 0 0 0-.887-3.707c-.277-.682-1.011-2.493-2.749-4.149a11.1 11.1 0 0 0-2.907-2 15 15 0 0 0-3.107-1.051l-.177-.033a8.4 8.4 0 0 1-1.333-.339c-.787-.272-1.34-.597-1.706-.811a12.4 12.4 0 0 1-1.857-1.341 13.2 13.2 0 0 1-2.757-3.369 12.8 12.8 0 0 1-1.563-4.883c-.098-.92-.28-2.631.395-4.677a9.6 9.6 0 0 1 1.65-3.051c1.208-1.47 2.594-2.198 3.134-2.442a8.8 8.8 0 0 1 3.558-.744z'
    />
    <path
      fill='#FF535E'
      d='M119.896 101.208c-.464 1.94-1.311 5.329-3.89 8.811a22 22 0 0 1-4.654 4.625 22 22 0 0 1-2.627 1.644l-9.941 3.702c4.622-2.141 7.152-5.529 8.154-6.905 2.591-3.557 3.431-6.927 3.896-8.879 1.451-6.088.437-11.033-.038-13.225a31.8 31.8 0 0 0-4.763-11.12c-1.096-1.612-3.325-4.824-7.395-7.664-2.249-1.57-6.199-4.249-11.928-4.593a20.7 20.7 0 0 0-6.884.758l8.374-3.26a23.1 23.1 0 0 1 5.696-.768 23 23 0 0 1 6.172.767c3.49.943 5.841 2.506 7.266 3.466.801.543 3.865 2.679 6.796 6.522a31.6 31.6 0 0 1 3.835 6.587 32.3 32.3 0 0 1 2.568 10.517c.125 1.762.328 4.978-.637 9.015'
    />
    <path
      fill='#000'
      d='M98.756 120.322a.334.334 0 0 1-.11-.633c4.641-2.152 7.19-5.649 8.027-6.8 2.605-3.576 3.409-6.949 3.841-8.76 1.464-6.136.372-11.18-.039-13.078a31.2 31.2 0 0 0-4.714-11.002c-.959-1.411-3.201-4.713-7.311-7.579-2.098-1.463-6.004-4.187-11.758-4.534a20.3 20.3 0 0 0-6.772.745.334.334 0 0 1-.407-.214.335.335 0 0 1 .195-.416l5.572-2.168 2.802-1.09.036-.012a23.6 23.6 0 0 1 5.777-.78c2.134-.023 4.3.248 6.262.78 3.603.972 6.051 2.624 7.366 3.51 1.426.968 4.215 3.11 6.875 6.597a32.2 32.2 0 0 1 3.875 6.657 32.5 32.5 0 0 1 2.596 10.625c.113 1.607.351 4.949-.646 9.116-.445 1.862-1.275 5.327-3.947 8.931a22.4 22.4 0 0 1-4.725 4.696 22 22 0 0 1-2.668 1.669q-.018.011-.04.019-3.31 1.234-6.62 2.465l-3.322 1.237a.3.3 0 0 1-.145.02zM87.328 67.315c5.626.508 9.57 3.262 11.502 4.608 4.211 2.937 6.502 6.31 7.481 7.751a31.8 31.8 0 0 1 4.813 11.236c.42 1.939 1.535 7.09.036 13.374-.443 1.857-1.268 5.313-3.951 8.998-.639.877-2.248 3.087-4.994 5.077l6.375-2.374a21.6 21.6 0 0 0 2.568-1.609c1.2-.877 2.97-2.379 4.583-4.555 2.59-3.494 3.399-6.873 3.833-8.689.973-4.067.741-7.34.629-8.913a31.8 31.8 0 0 0-2.543-10.409 31.6 31.6 0 0 0-3.795-6.518c-2.601-3.411-5.327-5.504-6.718-6.448-1.281-.865-3.669-2.477-7.166-3.42a22.6 22.6 0 0 0-6.083-.756c-1.889.018-3.77.273-5.596.754l-2.785 1.084-2.16.84a20.6 20.6 0 0 1 3.967-.026z'
    />
    <path
      fill='#FF444F'
      d='m101.736 95.049-11.655 9.262-9.084 3.392q10.081-8.013 20.165-16.025c.214.786.475 1.945.574 3.37'
    />
    <path
      fill='#000'
      d='M80.969 108.035a.33.33 0 0 1-.26-.169.336.336 0 0 1 .085-.425l20.164-16.024a.331.331 0 0 1 .525.17c.307 1.124.503 2.28.586 3.435a.34.34 0 0 1-.126.287l-11.655 9.263a.3.3 0 0 1-.091.051l-9.084 3.391a.35.35 0 0 1-.145.019zm20-15.78-18.12 14.402 7.072-2.64q5.738-4.56 11.473-9.12a17 17 0 0 0-.425-2.641'
    />
    <path
      fill='#FF444F'
      d='M97.575 107.297c-3.23 3.039-7.085 3.312-7.882 3.353-4.78.244-8.001-2.378-8.7-2.977l9.096-3.403c.515.382 1.192.835 2.024 1.276.344.179 1.328.684 2.707 1.121.715.226 1.642.471 2.757.629z'
    />
    <path
      fill='#000'
      d='M87.969 110.954c-3.643-.32-6.182-2.159-7.19-3.024a.335.335 0 0 1 .101-.568l9.095-3.401a.33.33 0 0 1 .312.044c.622.461 1.29.881 1.983 1.249a16.799 16.799 0 0 0 5.355 1.716c.126.017.23.107.269.23a.34.34 0 0 1-.092.345c-3.073 2.888-6.684 3.369-8.093 3.442-.606.031-1.188.017-1.742-.032zm-6.309-3.172c1.359 1.043 4.177 2.731 8.022 2.534 1.257-.064 4.363-.472 7.15-2.801a17 17 0 0 1-2.112-.527c-.963-.304-1.917-.7-2.76-1.142a16.5 16.5 0 0 1-1.922-1.196l-8.378 3.134z'
    />
    <path
      fill='#FF444F'
      d='M83.87 83.848a15.8 15.8 0 0 0-1.001 5.557c-.002.589.032 1.142.085 1.652q-4.195 3.354-8.388 6.709c-.43-1.33-.96-3.538-.752-6.266.116-1.539.38-4.49 2.47-7.392.748-1.038 2.935-3.749 6.751-4.833A11.5 11.5 0 0 1 87 78.863c-.893.95-2.217 2.6-3.13 4.985'
    />
    <path
      fill='#000'
      d='M74.538 98.098a.331.331 0 0 1-.285-.227 16.6 16.6 0 0 1-.766-6.395c.11-1.467.341-4.52 2.532-7.562 1.01-1.404 3.253-3.916 6.931-4.96a11.9 11.9 0 0 1 4.076-.424c.136.01.24.092.285.211.046.12.02.256-.069.35a14.8 14.8 0 0 0-3.06 4.876 15.4 15.4 0 0 0-.98 5.437c.001.537.029 1.081.084 1.618a.34.34 0 0 1-.124.297l-8.344 6.673-.044.036a.33.33 0 0 1-.237.072zM86.282 79.17a11.2 11.2 0 0 0-3.155.425c-3.483.99-5.612 3.374-6.572 4.707-2.08 2.89-2.3 5.816-2.408 7.222a15.9 15.9 0 0 0 .595 5.678l7.867-6.29c-.047-.5-.07-1.006-.068-1.506-.001-2.47.556-4.45 1.024-5.675a15.4 15.4 0 0 1 2.717-4.561'
    />
    <path
      fill='#FF7E88'
      d='M110.799 90.982a31.8 31.8 0 0 0-4.763-11.12c-1.096-1.61-3.324-4.824-7.397-7.664-2.247-1.568-6.197-4.249-11.929-4.594a20.7 20.7 0 0 0-9.25 1.592c-.973.412-4.22 1.88-7.255 5.183-3.107 3.382-4.284 6.836-4.9 8.7-1.389 4.215-1.334 7.685-1.287 9.588a31.6 31.6 0 0 0 1.883 9.91c2.095 5.787 5.319 9.431 6.233 10.426 1.932 2.103 5.537 6.024 11.743 7.811 1.954.562 7.916 2.185 14.402-.6 4.944-2.122 7.622-5.705 8.661-7.131 2.591-3.556 3.429-6.927 3.896-8.879 1.452-6.087.437-11.033-.038-13.225z'
    />
    <path
      stroke='#0E0E0E'
      strokeWidth={0.6}
      d='M110.799 90.982a31.8 31.8 0 0 0-4.763-11.12c-1.096-1.61-3.324-4.824-7.397-7.664-2.247-1.568-6.197-4.249-11.929-4.594a20.7 20.7 0 0 0-9.25 1.592c-.973.412-4.22 1.88-7.255 5.183-3.107 3.382-4.284 6.836-4.9 8.7-1.389 4.215-1.334 7.685-1.287 9.588a31.6 31.6 0 0 0 1.883 9.91c2.095 5.787 5.319 9.431 6.233 10.426 1.932 2.103 5.537 6.024 11.743 7.811 1.954.562 7.916 2.185 14.402-.6 4.944-2.122 7.622-5.705 8.661-7.131 2.591-3.556 3.429-6.927 3.896-8.879 1.452-6.087.437-11.033-.038-13.225z'
    />
    <path
      fill='#FF444F'
      d='M90.707 108.878q.052.014.104.012a.4.4 0 0 0 .285-.131.44.44 0 0 0 .116-.304l-.103-8.848 8.675 2.327a.394.394 0 0 0 .472-.232.5.5 0 0 0 .038-.193l-.103-6.255a.43.43 0 0 0-.306-.412l-8.917-2.46-.172-9.057a.43.43 0 0 0-.303-.41l-6.102-1.7a.39.39 0 0 0-.356.076.45.45 0 0 0-.156.346l.147 8.872-8.69-2.303a.38.38 0 0 0-.352.077.4.4 0 0 0-.115.155.5.5 0 0 0-.039.193l.104 6.265a.45.45 0 0 0 .088.258.4.4 0 0 0 .217.15l8.882 2.432.151 9.126a.45.45 0 0 0 .09.263.4.4 0 0 0 .222.151z'
    />
    <path
      fill='#0E0E0E'
      fillRule='evenodd'
      d='m90.6 108.226-5.73-1.499-.156-9.454-9.182-2.514-.097-5.9 9.204 2.44-.156-9.43 5.707 1.591.178 9.384 9.216 2.543.098 5.895-9.19-2.465zm9.537-6.369a.394.394 0 0 1-.357.077l-8.675-2.327.103 8.848c0 .114-.04.223-.116.304a.4.4 0 0 1-.39.119l-6.122-1.602a.4.4 0 0 1-.222-.151.45.45 0 0 1-.09-.263l-.15-9.126-8.883-2.431a.4.4 0 0 1-.217-.151.45.45 0 0 1-.088-.258l-.104-6.265a.46.46 0 0 1 .154-.348.39.39 0 0 1 .352-.077l8.69 2.303-.147-8.872a.45.45 0 0 1 .156-.346.4.4 0 0 1 .356-.077l6.102 1.702c.175.048.3.216.303.41l.172 9.055 8.917 2.46a.43.43 0 0 1 .306.413l.103 6.255a.443.443 0 0 1-.153.348'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(DerivLightFundsAddIcon);
export default ForwardRef;
def evaluacion():
    while True:
        print('Por favor, introduzca una puntuación en una escala de 1 a 5')
        point = input()

        if point.isdecimal():
            point = int(point)
            if point < 1 or point > 5:
                print('Por favor, introduzca un valor entre 1 y 5')
            else:
                print('Introduzca sus comentarios.')
                comment = input()
                post = f'punto: {point} comentario: {comment}'
                with open("data.txt", 'a') as file_pc:
                    file_pc.write(f'{post}\n')
                break
        else:
            print('La puntuación debe ser un número.')

def resultado():
    print('Resultados hasta la fecha.')
    with open("data.txt", "r") as read_file:
        print(read_file.read())

def main():
    while True:
        print('Seleccione el proceso que desea aplicar')
        print('1: Evaluar punto y comentario')
        print('2: Comprobar los resultados hasta ahora')
        print('3: Terminar')
        num = input()

        if num.isdecimal():
            num = int(num)
            if num == 1:
                evaluacion()
            elif num == 2:
                resultado()
            elif num == 3:
                print('Terminación.')
                break
            else:
                print('Por favor, introduzca un valor entre 1 y 3')
        else:
            print('Por favor, introduzca un valor entre 1 y 3')

if __name__ == "__main__":
    main()

